import React, { Fragment, useState, useEffect } from "react";
import Header from "./Header";
import Editor from "./Editor";
import { Box, styled } from "@mui/material";

const Container = styled(Box)`
  display: flex;
  background-color: #060606;
  height: 50vh;
`;

const Container2 = styled(Box)`
  height: 50vh;
`;
const Home = () => {
  
  const [html, setHtml] = useState("");
  const [css, setCss] = useState("");
  const [js, setJs] = useState("");
  const [srcDoc, setSrcDoc] = useState("");

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(`
        <html>
          <body>${html}</body>
          <style>${css}</style>
          <script>${js}</script>
        </html>
      `);
    }, 1000);

    return () => clearTimeout(timeout);
  }, [html, css, js]);  // useEffect runs when some changes occurs in html or css or javascript means useEffect runs 3 times
  return (
    <Fragment>
      <Header />
      <Container>
        {/* Input Part */}
        <Editor
          language="xml"
          displayName="HTML"
          icon="</>"
          color="red"
          value={html}
          onChange={setHtml}
        />
        <Editor
          language="css"
          displayName="CSS"
          icon="#"
          color="#ffdd00"
          value={css}
          onChange={setCss}
        />
        <Editor
          language="javascript"
          displayName="Javascript"
          icon="{}"
          color="#007eff"
          value={js}
          onChange={setJs}
        />
      </Container>

      {/* Output Part */}
      <Container2>
        <iframe
          srcDoc={srcDoc}
          title="Output"
          sandbox="allow-scripts"
          frameBorder={0}
          width="100%"
          height="100%"
        />
      </Container2>
    </Fragment>
  );
};

export default Home;
