import React, { lazy } from 'react';
import { Tool } from '@drodil/backstage-plugin-toolbox-react';
import DescriptionIcon from '@mui/icons-material/Description';
import Button from '@mui/material/Button';

const Base64Encode = lazy(() => import('../Encoders/Base64Encode'));
const UrlEncode = lazy(() => import('../Encoders/UrlEncode'));
const HtmlEntities = lazy(() => import('../Encoders/HtmlEntities'));
const Backslash = lazy(() => import('../Encoders/Backslash'));
const JwtDecoder = lazy(() => import('../Encoders/JwtDecoder'));

const NumberBase = lazy(() => import('../Converters/NumberBase'));
const MarkdownPreview = lazy(() => import('../Converters/MarkdownPreview'));
const CsvToJson = lazy(() => import('../Converters/CsvToJson'));
const JsonToCsv = lazy(() => import('../Converters/JsonToCsv'));
const JsonToYaml = lazy(() => import('../Converters/JsonToYaml'));
const YamlToJson = lazy(() => import('../Converters/YamlToJson'));
const StringUtilities = lazy(() => import('../Converters/StringUtilities'));
const TimeConverter = lazy(() => import('../Converters/TimeConverter'));
const XmlToJson = lazy(() => import('../Converters/XmlToJson'));
const SLACalculator = lazy(() => import('../Converters/SLACalculator'));
const ColorConverter = lazy(() => import('../Converters/ColorConverter'));
const RichTextToMarkdown = lazy(
  () => import('../Converters/RichTextToMarkdown'),
);

const EntityValidator = lazy(() => import('../Validators/EntityValidator'));
const EntityDescriber = lazy(() => import('../Misc/EntityDescriber'));
const Countdown = lazy(() => import('../Misc/Countdown'));
const Timer = lazy(() => import('../Misc/Timer'));
const Diff = lazy(() => import('../Misc/Diff'));

const LoremIpsum = lazy(() => import('../Generators/LoremIpsum'));
const Hash = lazy(() => import('../Generators/Hash'));
const QRCode = lazy(() => import('../Generators/QRCode'));
const BarCode = lazy(() => import('../Generators/BarCode'));
const Interface = lazy(() => import('../Generators/Interface'));

const JSBeautify = lazy(() => import('../Formatters/JSBeautify'));
const HTMLBeautify = lazy(() => import('../Formatters/HTMLBeautify'));
const CSSBeautify = lazy(() => import('../Formatters/CSSBeautify'));
const SQLBeautify = lazy(() => import('../Formatters/SQLBeautify'));

const IbanValidator = lazy(() => import('../Validators/IbanValidator'));
const RegexValidator = lazy(() => import('../Validators/RegexValidator'));
const UrlExploder = lazy(() => import('../Misc/UrlExploder'));
const Whois = lazy(() => import('../Networking/Whois'));
const StringAnalyzer = lazy(() => import('../Misc/StringAnalyzer'));

// const CidrCalculator = lazy(() => import('../Networking/CidrCalculator'));

export const defaultTools: Tool[] = [
  {
    id: 'base64-encode',
    name: 'Base64',
    component: <Base64Encode />,
    category: 'Encode/Decode',
    description: 'Encode and decode base64 strings',
  },
  {
    id: 'url-encode',
    name: 'URL',
    component: <UrlEncode />,
    category: 'Encode/Decode',
    description: 'Encode and decode URLs',
  },
  {
    id: 'html-entity-encode',
    name: 'HTML entities',
    component: <HtmlEntities />,
    category: 'Encode/Decode',
    description: 'Encode and decode HTML entity characters',
  },
  {
    id: 'backslash-encode',
    name: 'Backslash escape',
    component: <Backslash />,
    category: 'Encode/Decode',
    description: 'Encode and decode backslash escape characters',
  },
  {
    id: 'jwt-decoder-encode',
    name: 'JSON Web Token',
    component: <JwtDecoder />,
    category: 'Encode/Decode',
    description: 'Encode and decode JSON Web Tokens',
    aliases: ['jwt'],
  },

  {
    id: 'markdown-preview',
    name: 'Markdown preview',
    component: <MarkdownPreview />,
    description: 'Render markdown as HTML',
    aliases: ['md'],
  },
  {
    id: 'csv-to-json-convert',
    name: 'CSV to JSON',
    component: <CsvToJson />,
    category: 'Convert',
    description: 'Convert CSV text to JSON',
  },
  {
    id: 'json-to-csv-convert',
    name: 'JSON to CSV',
    component: <JsonToCsv />,
    category: 'Convert',
    description: 'Convert to JSON text to CSV',
  },
  {
    id: 'xml-to-json-convert',
    name: 'XML to JSON',
    component: <XmlToJson />,
    category: 'Convert',
    description: 'Convert to XML text to JSON',
  },
  {
    id: 'json-to-yaml-convert',
    name: 'JSON to YAML',
    component: <JsonToYaml />,
    category: 'Convert',
    description: 'Convert to JSON text to YAML',
  },
  {
    id: 'yaml-to-json-convert',
    name: 'YAML to JSON',
    component: <YamlToJson />,
    category: 'Convert',
    description: 'Convert to YAML text to JSON',
  },
  {
    id: 'rich-text-to-markdown-convert',
    name: 'HTML to Markdown',
    component: <RichTextToMarkdown />,
    category: 'Convert',
    description: 'Convert rich text to markdown',
  },
  {
    id: 'number-base-convert',
    name: 'Number base',
    component: <NumberBase />,
    category: 'Convert',
    description: 'Convert numbers between different bases',
  },
  {
    id: 'string-utilities-convert',
    name: 'String utilities',
    component: <StringUtilities />,
    category: 'Convert',
    description: 'Convert string to different case or string',
  },
  {
    id: 'string-analyzer',
    name: 'String analyzer',
    component: <StringAnalyzer />,
    category: 'Miscellaneous',
    description: 'Analyze string and get statistics',
  },
  {
    id: 'time-convert',
    name: 'Time format',
    component: <TimeConverter />,
    category: 'Convert',
    description: 'Convert to time to different presentations',
  },
  {
    id: 'color-convert',
    name: 'Color format',
    component: <ColorConverter />,
    category: 'Convert',
    description: 'Convert to color between different representation models',
  },
  {
    id: 'sla-calculator',
    name: 'Service level agreement',
    component: <SLACalculator />,
    category: 'Calculate',
    description: 'Calculate service level agreement percentage in time',
  },
  {
    id: 'entity-validator',
    name: 'Entity validator',
    component: <EntityValidator />,
    category: 'Backstage',
    headerButtons: [
      <Button
        variant="contained"
        key="entity-validator-button"
        size="small"
        target="_blank"
        href="https://backstage.io/docs/features/software-catalog/descriptor-format"
        startIcon={<DescriptionIcon />}
        color="inherit"
        sx={{
          backgroundColor: '#E0E0E0',
          color: '#000000 !important',
          '&:hover': {
            backgroundColor: '#E0E0E0',
          },
        }}
      >
        Entity descriptor format
      </Button>,
    ],
    description: 'Validate catalog entity YAML',
  },
  {
    id: 'entity-describer',
    name: 'Entity describer',
    component: <EntityDescriber />,
    category: 'Backstage',
    description: 'Describes existing catalog entity in YAML',
  },
  {
    id: 'qr-code-generate',
    name: 'QR Code',
    component: <QRCode />,
    category: 'Generate',
    description: 'Generate QR code from text',
  },
  {
    id: 'bar-code-generate',
    name: 'Barcode',
    component: <BarCode />,
    category: 'Generate',
    description: 'Generate Barcode from text',
  },
  {
    id: 'lorem-ipsum-generate',
    name: 'Lorem Ipsum',
    component: <LoremIpsum />,
    category: 'Generate',
    description: 'Generate random text for placeholders',
  },
  {
    id: 'hash-generate',
    name: 'Hash',
    component: <Hash />,
    category: 'Calculate',
    description: 'Calculate hash from given text',
    aliases: ['md2', 'md5', 'sha1', 'sha256', 'sha512'],
  },
  {
    id: 'interface-generate',
    name: 'JSON to Interface',
    component: <Interface />,
    category: 'Generate',
    description:
      'Generate interfaces for different programming languages from JSON',
  },
  {
    id: 'format-js',
    name: 'Javascript / JSON',
    component: <JSBeautify />,
    category: 'Format',
    description: 'Reformat Javascript / JSON code with Beautify',
    aliases: ['js-beautify', 'js'],
  },
  {
    id: 'format-html',
    name: 'HTML',
    component: <HTMLBeautify />,
    category: 'Format',
    description: 'Reformat HTML code with Beautify',
  },
  {
    id: 'format-css',
    name: 'CSS',
    component: <CSSBeautify />,
    category: 'Format',
    description: 'Reformat CSS code with Beautify',
  },
  {
    id: 'format-sql',
    name: 'SQL',
    component: <SQLBeautify />,
    category: 'Format',
    description: 'Reformat SQL code with Beautify',
  },
  {
    id: 'countdown',
    name: 'Countdown timer',
    component: <Countdown />,
    category: 'Miscellaneous',
    description: 'Timer that counts down and notifies when time runs out',
  },
  {
    id: 'stopwatch',
    name: 'Stopwatch timer',
    component: <Timer />,
    category: 'Miscellaneous',
    description: 'Timer that counts up until stopped',
  },
  {
    id: 'diff',
    name: 'Text diff',
    component: <Diff />,
    category: 'Miscellaneous',
    description: 'Shows differences between two texts',
  },
  {
    id: 'iban',
    name: 'IBAN validator',
    component: <IbanValidator />,
    category: 'Validate',
    description: 'Validates IBAN based on ISO 13616',
  },
  {
    id: 'regex',
    name: 'Regex validator',
    component: <RegexValidator />,
    category: 'Validate',
    description:
      'Validates regex patterns against a test-text and shows possible matches',
  },
  {
    id: 'url-exploder',
    name: 'URL exploder',
    component: <UrlExploder />,
    category: 'Miscellaneous',
    description: 'Explode and modify parts of URL easily',
  },
  {
    id: 'whois',
    name: 'Whois lookup',
    component: <Whois />,
    category: 'Networking',
    description: 'Lookup domain WHOIS information',
    requiresBackend: true,
  },
  /**
   {
   id: 'cidr-calculator',
   name: 'CIDR calculator',
   component: <CidrCalculator />,
   category: 'Networking',
   },
   */
];
