import { Camera } from './Camera';

export class Input {
  private canvas: HTMLCanvasElement;
  private mouseX: number = 0;
  private mouseY: number = 0;
  private touchX: number = 0;
  private touchY: number = 0;
  private isTouching: boolean = false;
  private boostActive: boolean = false;
  private isMobile: boolean;

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    this.isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    
    this.setupMouseListeners();
    this.setupTouchListeners();
    this.setupKeyboardListeners();
    this.setupMobileControls();
  }

  private setupMouseListeners(): void {
    // Track mouse position
    this.canvas.addEventListener('mousemove', (e) => {
      this.mouseX = e.clientX;
      this.mouseY = e.clientY;
    });

    // Mouse click for boost
    this.canvas.addEventListener('mousedown', (e) => {
      if (e.button === 0) { // Left click
        this.boostActive = true;
      }
    });

    this.canvas.addEventListener('mouseup', (e) => {
      if (e.button === 0) {
        this.boostActive = false;
      }
    });

    // Prevent context menu
    this.canvas.addEventListener('contextmenu', (e) => {
      e.preventDefault();
    });
  }

  private setupTouchListeners(): void {
    const joystickZone = document.getElementById('joystickZone');
    if (!joystickZone) return;

    let joystickActive = false;

    joystickZone.addEventListener('touchstart', (e) => {
      e.preventDefault();
      const touch = e.touches[0];
      joystickActive = true;
      this.isTouching = true;
      
      this.touchX = touch.clientX;
      this.touchY = touch.clientY;
    });

    joystickZone.addEventListener('touchmove', (e) => {
      e.preventDefault();
      if (!joystickActive) return;
      
      const touch = e.touches[0];
      this.touchX = touch.clientX;
      this.touchY = touch.clientY;
    });

    joystickZone.addEventListener('touchend', () => {
      joystickActive = false;
      this.isTouching = false;
    });

    joystickZone.addEventListener('touchcancel', () => {
      joystickActive = false;
      this.isTouching = false;
    });
  }

  private setupKeyboardListeners(): void {
    // Space for boost
    window.addEventListener('keydown', (e) => {
      if (e.code === 'Space') {
        e.preventDefault();
        this.boostActive = true;
      }
    });

    window.addEventListener('keyup', (e) => {
      if (e.code === 'Space') {
        this.boostActive = false;
      }
    });
  }

  private setupMobileControls(): void {
    const boostButton = document.getElementById('boostButton');
    if (!boostButton) return;

    boostButton.addEventListener('touchstart', (e) => {
      e.preventDefault();
      this.boostActive = true;
    });

    boostButton.addEventListener('touchend', () => {
      this.boostActive = false;
    });

    boostButton.addEventListener('touchcancel', () => {
      this.boostActive = false;
    });
  }

  getDirection(camera: Camera): number {
    let targetX: number;
    let targetY: number;

    if (this.isMobile && this.isTouching) {
      // Use touch position relative to joystick center
      const joystickZone = document.getElementById('joystickZone');
      if (joystickZone) {
        const rect = joystickZone.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        
        const dx = this.touchX - centerX;
        const dy = this.touchY - centerY;
        
        return Math.atan2(dy, dx);
      }
    }

    // Use mouse position
    const viewport = camera.getViewport();
    targetX = this.mouseX + viewport.x;
    targetY = this.mouseY + viewport.y;

    // Get player head position (center of screen)
    const centerX = viewport.x + viewport.width / 2;
    const centerY = viewport.y + viewport.height / 2;

    const dx = targetX - centerX;
    const dy = targetY - centerY;

    return Math.atan2(dy, dx);
  }

  isBoosting(): boolean {
    return this.boostActive;
  }

  getMousePosition(): { x: number; y: number } {
    return { x: this.mouseX, y: this.mouseY };
  }
}
