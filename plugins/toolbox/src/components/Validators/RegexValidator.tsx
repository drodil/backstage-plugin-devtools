import React, { useEffect } from 'react';
import { TripleEditor } from '../DefaultEditor/TripleEditor';
import { useToolboxTranslation } from '../../hooks';

export const RegexValidator = () => {
  const [input, setInput] = React.useState('');
  const [pattern, setPattern] = React.useState('');
  const [output, setOutput] = React.useState('');
  const { t } = useToolboxTranslation();

  useEffect(() => {
    function isRegexValid(inputString: string, patternString: string): string {
      const flags = 'gim'; // g=global, m=match line start/end, i=case insensitive
      const regex = new RegExp(patternString, flags);
      const testResults = regex.exec(inputString);
      if (testResults === null) {
        return t('tool.regex.patternDoesntMatch');
      }

      let result = '';
      for (let i = 0; i < testResults.length; ++i) {
        if (testResults[i].length === 0) {
          result += t('tool.regex.patternNoMatchOrEmpty');
        } else {
          const myNum = i + 1;
          const myRes = testResults[i];
          const myIdx = testResults.index;
          result += t('tool.regex.patternMatch', { myNum, myRes, myIdx });
        }
      }
      return result;
    }

    let outputString;
    try {
      // regex check
      outputString = isRegexValid(input, pattern);
    } catch (error) {
      const errorMsg = error.message;
      outputString = t('tool.regex.exceptionError', { errorMsg });
    }
    setOutput(outputString);
  }, [input, pattern, t]); // changes in these three fields trigger the change of output

  return (
    <TripleEditor
      input={input}
      setInput={setInput}
      pattern={pattern}
      setPattern={setPattern}
      output={output}
      setOutput={setOutput}
      minRows={20}
      inputLabel={t('tool.regex.inputField')}
      patternLabel={t('tool.regex.patternField')}
      outputLabel={t('tool.regex.outputField')}
      sample={t('tool.regex.sampleField')}
    />
  );
};

export default RegexValidator;
