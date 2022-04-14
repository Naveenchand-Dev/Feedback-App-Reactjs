import React from "react";
import Card from "../components/shared/Card";
import { Link } from "react-router-dom";

function AboutPage() {
  return (
    <Card>
      <h2>This is my first react app</h2>
      <h4>which is a feedback app</h4>
      <p>i hope you guys like it</p>
      <Link to="/">Back to home</Link>
    </Card>
  );
}

export default AboutPage;
