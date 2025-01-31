/*
 * Copyright 2024 The Backstage Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import {
  createTranslationRef,
  createTranslationResource,
} from '@backstage/core-plugin-api/alpha';

/** @public */
export const toolboxTranslationRef = createTranslationRef({
  id: 'toolbox',
  messages: {
    toolsPage: {
      title: 'Toolbox',
      pageTitle: 'Toolbox',
      input: {
        search: 'Search',
      },
      tabPanel: {
        mainLabel: 'Toolbox',
        tooltipTitle: 'Open tool in new window',
      },
    },
    toolPage: {
      toolNotAvailable: 'Tool not available',
    },
    welcomePage: {
      introText:
        'The toolbox contains commonly used tools for development and design. These tools include encoding, data generation, conversion tools, and other utilities to make work easier. All data is kept within this domain, so you don’t have to worry about your data getting into the wrong hands.',
      secondText:
        'To select tools, click the cards below or use the left-side navigation.',
    },
    tool: {
      category: {
        favorites: 'Favorites',
        backstage: 'Backstage',
        calculate: 'Calculate',
        convert: 'Convert',
        'encode/decode': 'Encode/Decode',
        format: 'Format',
        generate: 'Generate',
        miscellaneous: 'Miscellaneous',
      },
      'base64-encode': {
        name: 'Base64',
        description: 'Encode and decode base64 strings',
      },
      'url-encode': {
        name: 'URL',
        description: 'Encode and decode URLs',
      },
      'html-entity-encode': {
        name: 'HTML entities',
        description: 'Encode and decode HTML entity characters',
      },
      'backslash-encode': {
        name: 'Backslash escape',
        description: 'Encode and decode backslash escape characters',
      },
      'jwt-decoder-encode': {
        name: 'JSON Web Token',
        description: 'Encode and decode JSON Web Tokens',
        decodeError: "Couldn't decode JWT token: {{error}}",
        encodeError: "Couldn't encode JWT token: {{error}}",
        missingAttribute:
          "Couldn't encode JWT token: missing attribute {{attribute}}",
      },
      'markdown-preview': {
        name: 'Markdown preview',
        description: 'Render markdown as HTML',
      },
      'csv-to-json-convert': {
        name: 'CSV to JSON',
        description: 'Convert CSV text to JSON',
      },
      'xml-to-json-convert': {
        name: 'XML to JSON',
        description: 'Convert to XML text to JSON',
        invalidFormat: 'Invalid XML provided',
      },
      'json-to-yaml-convert': {
        name: 'JSON to YAML',
        description: 'Convert to JSON text to YAML',
      },
      'yaml-to-json-convert': {
        name: 'YAML to JSON',
        description: 'Convert to YAML text to JSON',
      },
      'rich-text-to-markdown-convert': {
        name: 'HTML to Markdown',
        description: 'Convert rich text to markdown',
        preview: 'Preview',
      },
      'number-base-convert': {
        name: 'Number base',
        description: 'Convert numbers between different bases',
        base2: 'Base 2 (Binary)',
        base8: 'Base 8 (Octal)',
        base10: 'Base 10 (Decimal)',
        base16: 'Base 16 (Hex)',
      },
      'string-utilities-convert': {
        name: 'String utilities',
        description: 'Convert string to different case or string',
        inputSearch: 'Search',
        inputReplace: 'Replace',
      },
      'string-analyzer': {
        name: 'String analyzer',
        description: 'Analyze string and get statistics',
        overallStats: 'Overall stats',
        characterStats: 'Character stats',
      },
      'time-convert': {
        name: 'Time format',
        description: 'Convert to time to different presentations',
        labelNow: 'Now',
        labelInput: 'Input',
        inputType: 'Input type',
        unixTime: 'Unix time (seconds since epoch)',
        millisecondsTime: 'Milliseconds (since epoch)',
        outputLabel: {
          local: 'Local',
          utc: 'UTC',
          unix: 'Unix time',
          dayOfTheWeek: 'Day of the week',
          weekNumber: 'Week number',
          quarter: 'Quarter',
          dayOfTheYear: 'Day of the year',
          leapYear: 'Leap year',
          timezone: 'Timezone',
        },
      },
      'color-convert': {
        name: 'Color format',
        description: 'Convert to color between different representation models',
        inputLabel: 'Color',
      },
      'sla-calculator': {
        name: 'Service level agreement',
        description: 'Calculate service level agreement percentage in time',
        invalidFormat: 'Only float values are supported!',
        maxValueError: 'Max value is 100!',
        inputLabel: 'Agreed SLA level in %',
        dailyLabel: 'Daily',
        weeklyLabel: 'Weekly',
        monthlyLabel: 'Monthly',
        quarterlyLabel: 'Quarterly',
        yearlyLabel: 'Yearly',
      },
      'entity-validator': {
        name: 'Entity validator',
        description: 'Validate catalog entity YAML',
        headerFormatButton: 'Entity descriptor format',
        inputLabel: 'Entity YAML',
        alertEmptyValue: 'Empty value provided',
        alertSuccessTitle: 'Success!',
        alertErrorTitle: 'Error!',
        alertValidEntity: 'Entity is valid!',
      },
      'entity-describer': {
        name: 'Entity describer',
        description: 'Describes existing catalog entity in YAML',
        entityLabel: 'Entity',
        outputLabel: 'Output',
      },
      'qr-code-generate': {
        name: 'QR Code',
        description: 'Generate QR code from text',
        fileType: 'File type:',
        dotType: 'Dot',
        cornerSquareType: 'Corner square',
        cornerDotType: 'Corner dot',
        shapeType: 'Shape',
        color: 'color',
        download: 'Download',
        square: 'Square',
        circle: 'Circle',
        classy: 'Classy',
        dots: 'Dots',
        downloadAs: 'File type',
        'classy-rounded': 'Classy rounded',
        'extra-rounded': 'Extra rounded',
        rounded: 'Rounded',
        dot: 'Dot',
      },
      'bar-code-generate': {
        name: 'Barcode',
        description: 'Generate barcode from text',
      },
      'lorem-ipsum-generate': {
        name: 'Lorem ipsum',
        description: 'Generate random text for placeholders',
        button: {
          line: 'Line',
          paragraph: 'Paragraph',
          slug: 'Slug',
          word: 'Word',
          hack: 'Hack',
          hex: 'Hex',
          datetime: 'Datetime',
          number: 'Number',
          string: 'String',
          uuid: 'UUID',
          ipv4: 'IPv4',
          ipv6: 'IPv6',
          mac: 'MAC',
          imei: 'IMEI',
          cron: 'Cron',
          domain: 'Domain',
          password: 'Password',
          url: 'URL',
          'user-agent': 'User agent',
          emoji: 'Emoji',
          address: 'Address',
          name: 'Name',
          'job-title': 'Job title',
          'product-name': 'Product name',
          'product-description': 'Product description',
          'catch-phrase': 'Catch phrase',
          song: 'Song name',
          bic: 'BIC',
          'credit-card': 'Credit card',
          iban: 'IBAN',
        },
      },
      'hash-generate': {
        name: 'Hash',
        description: 'Calculate hash from given text',
      },
      'interface-generate': {
        name: 'JSON to Interface',
        description:
          'Generate interfaces for different programming languages from JSON',
      },
      'format-js': {
        name: 'Javascript / JSON',
        description: 'Reformat Javascript / JSON code with Beautify',
        inputLabel: 'Unformatted JS',
        outputLabel: 'Formatted JS',
      },
      'format-html': {
        name: 'HTML',
        description: 'Reformat HTML code with Beautify',
        inputLabel: 'Unformatted HTML',
        outputLabel: 'Formatted HTML',
      },
      'format-css': {
        name: 'CSS',
        description: 'Reformat CSS code with Beautify',
        inputLabel: 'Unformatted CSS',
        outputLabel: 'Formatted CSS',
      },
      'format-sql': {
        name: 'SQL',
        description: 'Reformat SQL code with Beautify',
        inputLabel: 'Unformatted SQL',
        outputLabel: 'Formatted SQL',
      },
      countdown: {
        name: 'Countdown timer',
        description: 'Timer that counts down and notifies when time runs out',
        startButton: 'Start',
        stopButton: 'Stop',
        resetButton: 'Reset',
        hoursLabel: 'Hours',
        minutesLabel: 'Minutes',
        secondsLabel: 'Seconds',
      },
      stopwatch: {
        name: 'Stopwatch timer',
        description: 'Timer that counts up until stopped',
      },
      diff: {
        name: 'Text diff',
        description: 'Shows differences between two texts',
        loadingLabel: 'Loading...',
        selectLanguage: 'Select text language',
        originalFileUploadButton: 'Original file',
        modifiedFileUploadButton: 'Modified file',
      },
      iban: {
        name: 'IBAN validator',
        description: 'Validates IBAN based on ISO 13616',
        alertErrorTitle: 'Error!',
        alertInvalidIBAN: 'Invalid IBAN provided',
      },
      regex: {
        name: 'Regex validator',
        description: 'Validates Regex pattern',
        patternDoesntMatch: "pattern doesn't match the input text",
        patternNoMatchOrEmpty: 'no match or empty!',
        patternMatch: '{{myNum}}. match={{myRes}} on index={{myIdx}}\n',
        exceptionError:
          "pattern validation got exception\n\nmsg='{{errorMsg}}'",
        inputField: 'Input',
        outputField: 'Output',
        patternField: 'Regex-Pattern',
        sampleField: 'this is a sample regex pattern to test your patterns',
      },
      'url-exploder': {
        name: 'URL exploder',
        description: 'Explode and modify parts of URL easily',
        pasteFromClipboard: 'Paste URL from clipboard',
        copyToClipboard: 'Copy URL to clipboard',
        protocolLabel: 'Protocol',
        pathLabel: 'Path',
        usernameLabel: 'Username',
        queryLabel: 'Query',
        queryHelperText: "Each parameter on it's own row, format is key=value",
        hostLabel: 'Host',
        portLabel: 'Port',
        passwordLabel: 'Password',
        hashLabel: 'Hash',
        originLabel: 'Origin',
      },
      whois: {
        name: 'WHOIS lookup',
        description: 'Lookup domain WHOIS information',
        domainInput: 'Domain',
        lookupButton: 'Lookup',
        exampleButton: 'Example',
      },
    },
    components: {
      clearValueButton: {
        tooltipTitle: 'Clear input value',
        buttonText: 'Clear',
      },
      copyToClipboardButton: {
        tooltipTitle: 'Copy output to clipboard',
        buttonText: 'Copy',
      },
      favoriteButton: {
        tooltipTitleFavorite: 'Remove this tool from favorites',
        tooltipTitleNotFavorite: 'Mark this tool as favorite',
      },
      fileDownloadButton: {
        tooltipTitle: 'Download file',
        buttonText: 'Download',
      },
      fileUploadButton: {
        tooltipTitle: 'Upload file',
        buttonText: 'Upload',
      },
      pasteFromClipboardButton: {
        tooltipTitle: 'Paste input from clipboard',
        buttonText: 'Clipboard',
      },
      sampleButton: {
        tooltipTitle: 'Input sample',
        buttonText: 'Sample',
      },
      defaultEditor: {
        inputLabel: 'Input',
        outputLabel: 'Output',
        patternLabel: 'Pattern',
        mode: {
          encode: 'Encode',
          decode: 'Decode',
          replace: 'Replace',
          camel: 'Camel',
          snake: 'Snake',
          kebab: 'Kebab',
          upper: 'Upper',
          lower: 'Lower',
          capitalize: 'Capitalize',
          escape: 'Escape',
          unescape: 'Unescape',
        },
      },
      jsonSpaceSelector: {
        space_one: '1 space',
        space_two: '2 spaces',
        space_other: '{{count}} spaces',
      },
      homePageCard: {
        selectToolText: 'Select tool from widget settings',
      },
    },
  },
});

export const toolboxTranslations = createTranslationResource({
  ref: toolboxTranslationRef,
  translations: {
    fi: () => import('./locales/fi'),
    de: () => import('./locales/de'),
  },
});
