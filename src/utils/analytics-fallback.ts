// Fallback analytics for when Google Analytics is blocked
export class AnalyticsFallback {
  private static events: any[] = [];

  static track(event: any) {
    // Store events locally when GA is not available
    this.events.push({
      ...event,
      timestamp: new Date().toISOString(),
      userAgent: navigator.userAgent,
    });

    // Keep only last 100 events to prevent memory issues
    if (this.events.length > 100) {
      this.events = this.events.slice(-100);
    }

    console.log('Analytics Fallback - Event tracked:', event);
  }

  static getStoredEvents() {
    return this.events;
  }

  static clearEvents() {
    this.events = [];
  }

  // Optional: Send to custom endpoint in the future
  static async sendToCustomEndpoint(events: any[]) {
    // This could be implemented to send to your own analytics service
    try {
      // Example: await fetch('/api/analytics', { method: 'POST', body: JSON.stringify(events) });
      console.log('Events ready for custom endpoint:', events);
    } catch (error) {
      console.error('Failed to send events to custom endpoint:', error);
    }
  }
}
