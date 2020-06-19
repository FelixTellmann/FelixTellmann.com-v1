import React, { useState } from "react";
import "./index.scss";
import { Hero, LogoBanner } from "components/Section";

function Index(ctx) {
  
  return (
      <>
        <Hero />
        <LogoBanner />
        <Hero />
      </>
  
  );
}

export default Index;