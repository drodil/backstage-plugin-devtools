import React, { ReactElement } from 'react';
import { CopyToClipboardButton } from '../Buttons/CopyToClipboardButton';
import { PasteFromClipboardButton } from '../Buttons/PasteFromClipboardButton';
import { ClearValueButton } from '../Buttons/ClearValueButton';
import { SampleButton } from '../Buttons/SampleButton';
import { FileUploadButton } from '../Buttons';
import { FileDownloadButton } from '../Buttons/FileDownloadButton';
import Grid from '@mui/material/Grid';
import ButtonGroup from '@mui/material/ButtonGroup';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import { useToolboxTranslation } from '../../hooks';


type Props = {
  input: string;
  setInput: (value: string) => void;
  pattern: string;
  setPattern: (value: string) => void;
  output?: string;
  setOutput: (value: string) => void;
  mode?: string;
  minRows?: number;
  inputLabel?: string;
  patternLabel?: string;
  outputLabel?: string;
  setMode?: (value: string) => void;
  modes?: Array<string>;
  leftContent?: ReactElement;
  extraLeftContent?: ReactElement;
  middleContent?: ReactElement;
  extraMiddleContent?: ReactElement;
  rightContent?: ReactElement;
  extraRightContent?: ReactElement;
  sample?: string;
  additionalTools?: ReactElement[];
  allowFileUpload?: boolean;
  acceptFileTypes?: string;
  allowFileDownload?: boolean;
  downloadFileType?: string;
  downloadFileName?: string;
  inputProps?: any;
  outputProps?: any;
};

export const TripleEditor = (props: Props) => {
  const { t } = useToolboxTranslation();
  const {
    input,
    setInput,
    pattern,
    setPattern,
    output,
    setOutput,
    inputLabel = t('components.defaultEditor.inputLabel'),
    patternLabel = t('components.defaultEditor.patternLabel'),
    outputLabel = t('components.defaultEditor.outputLabel'),
    mode,
    setMode,
    modes,
    leftContent,
    extraLeftContent,
    middleContent,
    extraMiddleContent,
    rightContent,
    extraRightContent,
    sample,
    additionalTools,
    allowFileUpload,
    acceptFileTypes,
    allowFileDownload,
    downloadFileName,
    downloadFileType,
    minRows = 20,
  } = props;

  const [fileName, setFileName] = React.useState(
    downloadFileName ?? 'download.txt',
  );
  const [fileType, setFileType] = React.useState(
    downloadFileType ?? 'text/plain',
  );

  const readFileAndSetInput = (file?: File) => {
    if (!file) {
      setInput('');
      return;
    }

    setFileName(file.name);
    setFileType(file.type);
    const reader = new FileReader();
    reader.onload = async e => {
      // @ts-ignore
      setInput(e.target.result);
    };
    reader.readAsText(file);
  };

  const handleDrop = (ev: React.DragEvent<HTMLDivElement>) => {
    if (allowFileUpload !== true) {
      return;
    }
    ev.preventDefault();
    if (ev.dataTransfer.items) {
      [...ev.dataTransfer.items].forEach(item => {
        if (item.kind !== 'file') {
          return;
        }
        const file = item.getAsFile();
        if (file) {
          readFileAndSetInput(file);
        }
      });
    } else {
      [...ev.dataTransfer.files].forEach(file => {
        readFileAndSetInput(file);
      });
    }
  };

  return (
    <FormControl style={{ width: '100%' }} onDrop={handleDrop}>
      <Grid container spacing={4} style={{ marginBottom: '5px' }}>
        {modes && modes.length > 0 && (
          <Grid item sx={{ pl: '16px', pt: '32px !important' }}>
            <ButtonGroup
              size="small"
              disableElevation
              variant="contained"
              aria-label="Disabled elevation buttons"
              style={{ marginBottom: '1rem' }}
              color="inherit"
            >
              {modes.map(m => (
                <Button
                  size="small"
                  key={m}
                  onClick={() => setMode && setMode(m)}
                  variant={mode === m ? 'contained' : 'outlined'}
                  color="inherit"
                  sx={{
                    ...(mode === m && {
                      color: '#000000',
                      backgroundColor: '#E0E0E0',
                    }),
                    ...(mode !== m && {
                      borderColor: '#E0E0E0',
                    }),
                  }}
                >
                  {m}
                </Button>
              ))}
            </ButtonGroup>
          </Grid>
        )}
        <Grid item sx={{ p: '16px' }}>
          <ButtonGroup size="small">
            <ClearValueButton setValue={setInput} />
            <PasteFromClipboardButton setInput={setInput} />
            {output && <CopyToClipboardButton output={output} />}
            {sample && <SampleButton setInput={setInput} sample={sample} />}
            {allowFileUpload && (
              <FileUploadButton
                accept={acceptFileTypes}
                onFileLoad={readFileAndSetInput}
              />
            )}
            {output && allowFileDownload && (
              <FileDownloadButton
                content={output}
                fileName={fileName}
                fileType={fileType}
              />
            )}
          </ButtonGroup>
        </Grid>
        {additionalTools && additionalTools.length > 0 && (
          <Grid item>{additionalTools.map(tool => tool)}</Grid>
        )}
      </Grid>
      <Grid container columns={3}>
        <Grid
          item
          xs={1}
          lg={1}
          sx={{ pt: '8px !important', pl: '8px !important' }}
        >
          {leftContent ? (
            leftContent
          ) : (
            <>
              <TextField
                label={inputLabel}
                // eslint-disable-next-line
                id="input"
                multiline
                style={{ width: '100%' }}
                value={input}
                onChange={e => setInput(e.target.value)}
                minRows={minRows}
                variant="outlined"
                sx={{
                  p: '8px',
                  '& label[class*="MuiFormLabel-root"]': {
                    paddingTop: '10px !important',
                    paddingLeft: '10px !important',
                  },
                }}
              />
            </>
          )}
          {extraLeftContent}
        </Grid>
        <Grid
          item
          xs={1}
          lg={1}
          sx={{ pt: '8px !important', pl: '8px !important' }}
        >
          {middleContent ? (
            middleContent
          ) : (
            <>
              <TextField
                label={patternLabel}
                // eslint-disable-next-line
                id="pattern"
                multiline
                style={{ width: '100%' }}
                value={pattern}
                onChange={e => setPattern(e.target.value)}
                minRows={minRows}
                variant="outlined"
                sx={{
                  p: '8px',
                  '& label[class*="MuiFormLabel-root"]': {
                    paddingTop: '10px !important',
                    paddingLeft: '10px !important',
                  },
                }}
              />
            </>
          )}
          {extraMiddleContent}
        </Grid>
        <Grid
          item
          xs={1}
          lg={1}
          sx={{ pt: '8px !important', pl: '8px !important' }}
        >
          {rightContent ? (
            rightContent
          ) : (
            <>
              <TextField
                inputProps={{
                  readOnly: true,
                }}
                label={outputLabel}
                // eslint-disable-next-line
                id="output"
                multiline
                style={{ width: '100%' }}
                value={output}
                onChange={e => setOutput(e.target.value)}
                minRows={minRows}
                variant="outlined"
                sx={{
                  p: '8px',
                  '& label[class*="MuiFormLabel-root"]': {
                    paddingTop: '10px !important',
                    paddingLeft: '10px !important',
                  },
                }}
              />
            </>
          )}
          {extraRightContent}
        </Grid>
      </Grid>
    </FormControl>
  );
};
