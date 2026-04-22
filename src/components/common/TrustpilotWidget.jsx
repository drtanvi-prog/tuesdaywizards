import { useEffect } from "react";

export default function TrustpilotWidget() {
   useEffect(() => {
      // Load Trustpilot script only once
      const scriptId = "trustpilot-widget-script";
      if (!document.getElementById(scriptId)) {
         const script = document.createElement("script");
         script.type = "text/javascript";
         script.src = "//widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js";
         script.async = true;
         script.id = scriptId;
         document.body.appendChild(script);
      }
   }, []);

   return (
      <div
         className="trustpilot-widget"
         data-locale="en-US"
         data-template-id="53aa8807dec7e10d38f59f32"
         data-businessunit-id="69668c7a62f8fe8a8cb174c0"
         data-style-height="150px"
         data-style-width="100%"
         data-token="86cf6b05-09b9-48df-a255-43b44b3f8301"
      >
         <a
            href="https://www.trustpilot.com/review/tuesdaywizards.com"
            target="_blank"
            rel="noopener"
         >
            Trustpilot
         </a>
      </div>
   );
}
