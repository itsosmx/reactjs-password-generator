import React, { useEffect } from "react";
import {
  Container,
  DisplayBox,
  Options,
  Strength,
  StrengthBar,
  StrengthPoint,
  Title,
  Wrapper,
} from "./styled";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import { Button, IconButton, Slider } from "@mui/material";
import { Checkbox, Generator } from "../components";
import LoopIcon from "@mui/icons-material/Loop";

export default function Main() {
  const [options, setOptions] = React.useState({
    uppercase: true,
    lowercase: true,
    numbers: true,
    symbols: true,
    length: 16,
    refresh: false,
  });
  const [password, setPassword] = React.useState("");
  const onChange = (e) => {
    setOptions({ ...options, [e.target.name]: e.target.checked });
  };

  useEffect(() => {
    const stringPassword = Generator({ ...options });
    setPassword(stringPassword);
  }, [options]);

  const Copy = () => {
    navigator.clipboard.writeText(password);
  };

  return (
    <Container>
      <Wrapper>
        <Title>Password Generator</Title>
        <DisplayBox>
          <input type="text" disabled title={password} value={password} />
          <IconButton onClick={Copy}>
            <ContentCopyIcon color="secondary" />
          </IconButton>
        </DisplayBox>
        <Options>
          <Slider
            size="small"
            min={8}
            max={100}
            defaultValue={20}
            value={options.length}
            onChange={(e, value) => setOptions({ ...options, length: value })}
            valueLabelDisplay="auto"
            color="secondary"
            marks={[
              {
                value: 8,
                label: "8",
              },
              {
                value: 100,
                label: "100",
              },
            ]}
          />
          <Checkbox
            value={options.uppercase}
            label="Include Uppercase Letters"
            onChange={onChange}
            name="uppercase"
          />
          <Checkbox
            value={options.lowercase}
            label="Include Lowercase Letters"
            onChange={onChange}
            name="lowercase"
          />
          <Checkbox
            value={options.numbers}
            label="Include Numbers"
            onChange={onChange}
            name="numbers"
          />
          <Checkbox
            value={options.symbols}
            label="Include Symbols"
            onChange={onChange}
            name="symbols"
          />
          <Strength>
            <p>Strength</p>
            <StrengthBar>
              {Array.from(Array(level(options)).keys()).map((_, index) => (
                <StrengthPoint checked key={index} />
              ))}
              {Array.from(Array(4 - level(options)).keys()).map((_, index) => (
                <StrengthPoint key={index} />
              ))}
            </StrengthBar>
          </Strength>
          <Button
            variant="contained"
            color="secondary"
            fullWidth
            sx={{
              marginBottom: "1rem",
            }}
            endIcon={<LoopIcon />}
            onClick={() =>
              setOptions({ ...options, refresh: !options.refresh })
            }
          >
            Generate
          </Button>
        </Options>
      </Wrapper>
    </Container>
  );
}

/**
 *
 * @param {Object} options
 */
function level(options) {
  const { uppercase, lowercase, numbers, symbols } = options;
  let level = 0;
  if (uppercase) level++;
  if (lowercase) level++;
  if (numbers) level++;
  if (symbols) level++;

  return level;
}
