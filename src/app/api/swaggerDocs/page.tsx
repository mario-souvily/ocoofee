"use client";

import SwaggerUI from "swagger-ui-react";
import "swagger-ui-react/swagger-ui.css";


export default function ApiDocsPage() {
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <SwaggerUI url="/api/docs" />
    </div>
  );
}
