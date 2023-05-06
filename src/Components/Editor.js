import '../App.css'
import React, {useState} from "react";
import { Box,styled } from "@mui/material";
import CloseFullscreenIcon from '@mui/icons-material/CloseFullscreen';
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/material.css'
import 'codemirror/mode/xml/xml' // For HTML editor
import 'codemirror/mode/css/css' // For CSS editor
import 'codemirror/mode/javascript/javascript' // For Javascript editor
import { Controlled as ControlledEditor } from "react-codemirror2";


// codemirror provides editors
const Heading = styled(Box)`
  background: #33353f;
  display: flex;
  padding: 9px 12px;
`

const Header = styled(Box)`
  display: flex;
  background: #060606;
  color: white;
  justify-content: space-between;
  font-weight: 700px;
`

const Container = styled(Box)`
  flex-grow: 1;
  flex-basic: 0;
  display: flex;
  flex-direction: column;
  padding: 0px 8px 8px;
`

const Editor = (props) => {

  const [open,setOpen] = useState(true)

  const {
    language,
    displayName,
    icon,
    color,
    value,
    onChange
  } = props

  const handleChange = (editor,data,value) =>{
    onChange(value);
  }

  return (
    <Container style={ open ? null : { flexGrow: 0 }}>
      <Header>
        <Heading>
          <Box
            component="span"
            style={{
              backgroundColor: color,
              height: 20,
              width: 20,
              display: "flex",
              placeContent: 'center',
              borderRadius: 5,
              marginRight: 5,
              paddingBottom: 2,
              color: 'black',
              fontWeight: 'bolder',
            }}
          >
            { icon }
          </Box>
          { displayName }
        </Heading>
        <CloseFullscreenIcon fontSize='small' style={{alignSelf:'center'}} onClick={() => setOpen(prevState => !prevState)} />
      </Header>
      {/* ControlledEditor is a controlled component */}
      <ControlledEditor 
          className="code-mirror-wrapper"
          value={value}
          onBeforeChange={handleChange}
          // These options are provided by codemirror
          options={{
            lineWrapping: true,
            lint: true,
            mode: language,
            theme: 'material',
            lineNumbers: true
          }}
      />
    </Container>
  );
};

export default Editor;
