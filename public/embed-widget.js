(function() {
    // Dynamically load the widget CSS (optional if styles are already included)
    var link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://yourdomain.vercel.app/pages/new/Widget.module.css'; // Update this to your deployed CSS file URL
    document.head.appendChild(link);

    // Create a div to hold the widget
    var widgetContainer = document.createElement('div');
    widgetContainer.id = 'widget-container';
    document.body.appendChild(widgetContainer);

    // Load the Next.js widget via iframe for isolation
    var iframe = document.createElement('iframe');
    iframe.src = 'https://yourdomain.vercel.app'; // Update this to your deployed widget URL
    iframe.style.position = 'fixed';
    iframe.style.bottom = '0';
    iframe.style.right = '0';
    iframe.style.width = '300px';
    iframe.style.height = '400px';
    iframe.style.border = 'none';
    iframe.style.zIndex = '9999';
    widgetContainer.appendChild(iframe);
})();
