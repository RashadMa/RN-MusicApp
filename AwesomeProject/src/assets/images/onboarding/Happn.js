import * as React from 'react';
import Svg, {Path, G, Defs} from 'react-native-svg';
const Happn = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={375}
    height={272}
    fill="none"
    {...props}>
    <Path
      fill="#000"
      d="m47.32 29.24-.92-4.08c-.16-.56-.68-.96-1.28-.96h-18c-.72 0-1.32.56-1.32 1.28 0 .52.36.96.84 1.16.76.32 1.68.88 1.68 2.16v19.6c0 1.28-.92 1.88-1.68 2.16-.48.2-.84.64-.84 1.16 0 .72.6 1.28 1.32 1.28h8.16c.72 0 1.32-.56 1.32-1.28 0-.52-.36-.96-.84-1.16-.76-.28-1.68-.88-1.68-2.16v-8.8h5c1.68 0 1.92 1.2 2.28 1.8.2.48.64.84 1.12.84.72 0 1.24-.64 1.28-1.36v-4.44c-.04-.72-.56-1.24-1.28-1.24-.44 0-.88.24-1.08.64-.4.64-.6 1.88-2.32 1.88h-5v-9.6c0-2.12 1.2-2.24 2.32-2.24h2.36c3.2 0 5.08.16 6.12 4 .12.52.64.92 1.16.92.84 0 1.48-.72 1.28-1.56ZM59.203 33c-1.96 0-4.04 1.08-4.84 2.68v-1.72c0-.96-.56-1.08-1.12-.96l-5.84 1.08c-.48.16-.84.6-.84 1.12 0 .52.32.96.76 1.12.76.4 1.6.76 1.6 2.84v9.72c0 1-.84 1.52-1.56 1.84-.48.2-.8.56-.8 1.08 0 .68.48 1.16 1.16 1.2h7.84c.64 0 1.16-.52 1.16-1.2 0-.52-.36-.92-.88-1.12-.68-.28-1.48-.8-1.48-1.8v-8.4c0-2.68 1.6-4.4 3.08-4.4.64 0 .56.48.8 1.08.32.84 1 1.56 2.32 1.56 3.68 0 3.12-5.72-1.36-5.72Zm9.821 9.52h10.64c1.76 0 2.72.2 2.6-1.44-.52-4.84-3.2-8.4-9.16-8.4-6.6 0-9.92 4.52-9.92 10.24 0 6.64 3.6 10.56 10.04 10.56 3.28 0 5.32-1 7.04-2.72.52-.56 1-1.12 1.32-1.8 1.52-3.52-2.12-4.36-3.16-2.76-1 1.4 0 2.68-.68 3.72-.76 1.2-2.24 1.72-3.64 1.72-3 0-4.92-3-5.08-7.92v-1.2Zm4.08-8.28c1.84 0 3.4 2.08 3.4 5.4 0 .6-.28 1.2-1.48 1.2h-5.88c0-2.64 1.24-6.6 3.96-6.6Zm16.605 8.28h10.64c1.76 0 2.72.2 2.6-1.44-.52-4.84-3.2-8.4-9.16-8.4-6.6 0-9.92 4.52-9.92 10.24 0 6.64 3.6 10.56 10.04 10.56 3.28 0 5.32-1 7.04-2.72.52-.56 1-1.12 1.32-1.8 1.52-3.52-2.12-4.36-3.16-2.76-1 1.4 0 2.68-.68 3.72-.76 1.2-2.24 1.72-3.64 1.72-3 0-4.92-3-5.08-7.92v-1.2Zm4.08-8.28c1.84 0 3.4 2.08 3.4 5.4 0 .6-.28 1.2-1.48 1.2h-5.88c0-2.64 1.24-6.6 3.96-6.6Zm23.066 18.84c2.56 0 4.28-.92 5.36-2.32v1.36c0 .96.56 1.04 1.12.96l5.48-.52c.76-.08 1.2-.52 1.2-1.16 0-.52-.32-.92-.76-1.12-.8-.36-1.6-.76-1.6-2.84v-7.08c0-5.72-3.36-7.64-8.52-7.64-2.88 0-6.08.96-7.28 3.84-1.08 2.52 2.08 4.68 3.88 2.4.56-.72.4-1.28.52-2.32.12-1.16 1.36-2.36 2.88-2.36 2.64 0 3.08 2.88 3.08 6v.64c-3.68.28-11.04.64-11.04 6.52 0 3.76 2.72 5.64 5.68 5.64Zm.16-5.72c0-3.84 2.32-4.64 5.2-4.84v4.08c0 4.08-5.2 6.2-5.2.76Zm28.714-1.16c-1.04 1.4-.04 2.64-.68 3.72-.68 1.08-1.8 1.76-3.68 1.76-3.04 0-4.92-3.36-4.92-8.6 0-4.6 1.4-8.88 4.76-8.88 1.36 0 2.4.64 3 1.72.8 1.36-.4 2.76.92 4.52 1.24 1.6 5.44.68 3.6-3.32-1.32-2.76-4.12-4.48-8.08-4.48-6.6 0-10.04 4.56-10.04 10.44 0 5.8 3.44 10.4 10.04 10.4 3.08 0 5.32-1.12 6.84-2.72.52-.56 1-1.12 1.32-1.8 1.56-3.36-2-4.28-3.08-2.76Zm19.591 0c-1.04 1.4-.04 2.64-.68 3.72-.68 1.08-1.8 1.76-3.68 1.76-3.04 0-4.92-3.36-4.92-8.6 0-4.6 1.4-8.88 4.76-8.88 1.36 0 2.4.64 3 1.72.8 1.36-.4 2.76.92 4.52 1.24 1.6 5.44.68 3.6-3.32-1.32-2.76-4.12-4.48-8.08-4.48-6.6 0-10.04 4.56-10.04 10.44 0 5.8 3.44 10.4 10.04 10.4 3.08 0 5.32-1.12 6.84-2.72.52-.56 1-1.12 1.32-1.8 1.56-3.36-2-4.28-3.08-2.76Zm10.311-3.68h10.64c1.76 0 2.72.2 2.6-1.44-.52-4.84-3.2-8.4-9.16-8.4-6.6 0-9.92 4.52-9.92 10.24 0 6.64 3.6 10.56 10.04 10.56 3.28 0 5.32-1 7.04-2.72.52-.56 1-1.12 1.32-1.8 1.52-3.52-2.12-4.36-3.16-2.76-1 1.4 0 2.68-.68 3.72-.76 1.2-2.24 1.72-3.64 1.72-3 0-4.92-3-5.08-7.92v-1.2Zm4.08-8.28c1.84 0 3.4 2.08 3.4 5.4 0 .6-.28 1.2-1.48 1.2h-5.88c0-2.64 1.24-6.6 3.96-6.6Zm20.858 7.16c-2.4-1.48-4.92-2.44-4.92-4.52 0-1.44 1.08-2.64 3.2-2.64 2.04 0 3.24 1.36 3.4 2.4.12.8-.12 1.52.2 2.32.4 1.04 1.48 1.96 2.88 1.56 1.72-.48 1.88-2.64 1.16-3.88-.56-1-2.16-3.92-7.76-3.92-5.44 0-8.6 2.56-8.6 5.6 0 2.76 3.2 4.72 6.64 6.68 2.32 1.32 4.84 2.4 4.84 4.2 0 1.52-1.12 2.56-3.36 2.56-2.24 0-3.52-1.32-3.68-2.32-.12-.8.08-1.4-.2-2.4-.32-1.16-1.6-1.96-3-1.44-1.84.64-1.64 2.88-1.12 3.84.56.92 2.28 3.88 8.12 3.88 5.48 0 8.68-2.56 8.68-5.64 0-2.72-2.16-3.6-6.48-6.28Zm18.575 0c-2.4-1.48-4.92-2.44-4.92-4.52 0-1.44 1.08-2.64 3.2-2.64 2.04 0 3.24 1.36 3.4 2.4.12.8-.12 1.52.2 2.32.4 1.04 1.48 1.96 2.88 1.56 1.72-.48 1.88-2.64 1.16-3.88-.56-1-2.16-3.92-7.76-3.92-5.44 0-8.6 2.56-8.6 5.6 0 2.76 3.2 4.72 6.64 6.68 2.32 1.32 4.84 2.4 4.84 4.2 0 1.52-1.12 2.56-3.36 2.56-2.24 0-3.52-1.32-3.68-2.32-.12-.8.08-1.4-.2-2.4-.32-1.16-1.6-1.96-3-1.44-1.84.64-1.64 2.88-1.12 3.84.56.92 2.28 3.88 8.12 3.88 5.48 0 8.68-2.56 8.68-5.64 0-2.72-2.16-3.6-6.48-6.28Zm61.062 11.16c1.84-.72 1.16-3.2-.56-2.64-.64.12-2.6 1.12-2.6-2.96V35h3.4c1.36 0 1.32-1.8 0-1.8h-3.4V30c0-1.36-1.16-1.2-2.32-.36-1.84 1.36-3.56 2.4-5.48 3.68-.76.52-.68 1.68.24 1.68h2.12v12.48c0 4.52 3.96 7.04 8.6 5.08Zm11.077.88c6.68 0 9.68-4.6 9.68-10.36 0-5.8-3-10.4-9.68-10.4-6.64 0-10 4.6-10 10.4 0 5.76 3.36 10.36 10 10.36Zm-.04-1.56c-2.8 0-4.12-4.16-4.12-8.8 0-4.68 1.32-8.84 4.12-8.84s3.88 4.16 3.88 8.84c0 4.64-1.08 8.8-3.88 8.8ZM59.88 98.68c-.68-.32-1.48-.8-1.48-1.8v-8.6c0-4.48-2.6-7.28-6.64-7.28-2.48 0-4.96.92-6.32 3.32C44.56 82.2 42.28 81 39.6 81c-2.76 0-5.12 1.64-6 3.2v-2.24c0-.96-.56-1.08-1.12-.96l-5.84 1.08c-.56.12-.84.6-.84 1.12 0 .52.32.96.76 1.12.76.4 1.6.76 1.6 2.84v9.72c0 1-.84 1.52-1.56 1.84-.48.2-.8.56-.8 1.08 0 .68.48 1.16 1.16 1.2h7.76c.64 0 1.16-.52 1.16-1.2 0-.52-.36-.96-.88-1.12-.72-.24-1.4-.8-1.4-1.8V88.2c0-2.28 1.84-3.6 3.44-3.6 1.32 0 3.52.8 3.52 4.44v7.84c0 1-.76 1.52-1.48 1.84-.44.2-.8.56-.8 1.08 0 .68.48 1.16 1.16 1.2h7.68c.64 0 1.16-.52 1.16-1.2 0-.52-.36-.92-.88-1.12-.68-.28-1.4-.8-1.4-1.8v-8.72c0-2.08 1.84-3.56 3.44-3.56 1.32 0 3.52.8 3.52 4.44v7.84c0 1-.76 1.52-1.48 1.84-.48.2-.8.56-.8 1.08 0 .68.48 1.2 1.16 1.2h7.76c.64 0 1.16-.52 1.16-1.2 0-.52-.36-.88-.88-1.12Zm6.647-20.8c1.92 0 3.16-1.4 3.16-2.92s-1.24-2.88-3.16-2.88c-1.92 0-3.12 1.36-3.12 2.88 0 1.52 1.2 2.92 3.12 2.92Zm4.12 20.8c-.68-.2-1.48-.8-1.48-1.8V81.96c0-.96-.56-1.08-1.12-.96l-5.84 1.08c-.48.12-.84.6-.84 1.12 0 .52.32.92.76 1.12.76.36 1.6.76 1.6 2.84v9.72c0 1-.84 1.56-1.56 1.84-.48.2-.8.56-.8 1.08 0 .68.48 1.16 1.16 1.2h7.84c.64 0 1.16-.52 1.16-1.2 0-.52-.36-.96-.88-1.12Zm10.763 0c-.68-.32-1.48-.8-1.48-1.8V73.2c0-.96-.56-1.08-1.12-.96l-5.84 1.08c-.48.12-.84.6-.84 1.12 0 .52.32.88.76 1.12.76.4 1.6.76 1.6 2.84v18.48c0 1-.84 1.56-1.56 1.84-.48.2-.8.56-.8 1.08 0 .68.48 1.16 1.16 1.2h7.84c.64 0 1.16-.52 1.16-1.2 0-.52-.36-.88-.88-1.12Zm10.958 0c-.68-.32-1.48-.8-1.48-1.8V73.2c0-.96-.56-1.08-1.12-.96l-5.84 1.08c-.48.12-.84.6-.84 1.12 0 .52.32.88.76 1.12.76.4 1.6.76 1.6 2.84v18.48c0 1-.84 1.56-1.56 1.84-.48.2-.8.56-.8 1.08 0 .68.48 1.16 1.16 1.2h7.84c.64 0 1.16-.52 1.16-1.2 0-.52-.36-.88-.88-1.12Zm6.837-20.8c1.92 0 3.16-1.4 3.16-2.92s-1.24-2.88-3.16-2.88c-1.92 0-3.12 1.36-3.12 2.88 0 1.52 1.2 2.92 3.12 2.92Zm4.12 20.8c-.68-.2-1.48-.8-1.48-1.8V81.96c0-.96-.56-1.08-1.12-.96l-5.84 1.08c-.48.12-.84.6-.84 1.12 0 .52.32.92.76 1.12.76.36 1.6.76 1.6 2.84v9.72c0 1-.84 1.56-1.56 1.84-.48.2-.8.56-.8 1.08 0 .68.48 1.16 1.16 1.2h7.84c.64 0 1.16-.52 1.16-1.2 0-.52-.36-.96-.88-1.12Zm11.483 2.76c6.68 0 9.68-4.6 9.68-10.36 0-5.8-3-10.4-9.68-10.4-6.64 0-10 4.6-10 10.4 0 5.76 3.36 10.36 10 10.36Zm-.04-1.56c-2.8 0-4.12-4.16-4.12-8.8 0-4.68 1.32-8.84 4.12-8.84s3.88 4.16 3.88 8.84c0 4.64-1.08 8.8-3.88 8.8Zm32.404-1.2c-.68-.28-1.48-.8-1.48-1.8v-8.6c0-4.48-2.68-7.28-6.52-7.28-2.76 0-5 1.64-5.88 3.2v-2.24c0-.96-.56-1.08-1.12-.96l-5.84 1.08c-.52.12-.84.6-.84 1.12 0 .52.32.96.76 1.12.76.4 1.6.76 1.6 2.84v9.72c0 1-.84 1.52-1.56 1.84-.48.2-.8.56-.8 1.08 0 .68.48 1.16 1.16 1.2h7.76c.64 0 1.16-.52 1.16-1.2 0-.52-.36-.92-.88-1.12-.72-.28-1.4-.8-1.4-1.8v-8.84c0-2.12 1.84-3.44 3.44-3.44 1.28 0 3.52.76 3.52 4.44v7.84c0 1-.76 1.56-1.48 1.84-.48.2-.8.56-.8 1.08 0 .68.48 1.16 1.16 1.2h7.76c.64 0 1.16-.52 1.16-1.2 0-.52-.36-.92-.88-1.12Zm12.146-9.28c-2.4-1.48-4.92-2.44-4.92-4.52 0-1.44 1.08-2.64 3.2-2.64 2.04 0 3.24 1.36 3.4 2.4.12.8-.12 1.52.2 2.32.4 1.04 1.48 1.96 2.88 1.56 1.72-.48 1.88-2.64 1.16-3.88-.56-1-2.16-3.92-7.76-3.92-5.44 0-8.6 2.56-8.6 5.6 0 2.76 3.2 4.72 6.64 6.68 2.32 1.32 4.84 2.4 4.84 4.2 0 1.52-1.12 2.56-3.36 2.56-2.24 0-3.52-1.32-3.68-2.32-.12-.8.08-1.4-.2-2.4-.32-1.16-1.6-1.96-3-1.44-1.84.64-1.64 2.88-1.12 3.84.56.92 2.28 3.88 8.12 3.88 5.48 0 8.68-2.56 8.68-5.64 0-2.72-2.16-3.6-6.48-6.28Zm25.102 12.04c6.68 0 9.68-4.6 9.68-10.36 0-5.8-3-10.4-9.68-10.4-6.64 0-10 4.6-10 10.4 0 5.76 3.36 10.36 10 10.36Zm-.04-1.56c-2.8 0-4.12-4.16-4.12-8.8 0-4.68 1.32-8.84 4.12-8.84s3.88 4.16 3.88 8.84c0 4.64-1.08 8.8-3.88 8.8Zm26.054-25.48c-1.32-1.76-3.84-2.2-5.48-2.2-4.68 0-7.88 2.8-7.88 7.28v1.68h-1.72c-1.08 0-1.16 1.88 0 1.88h1.72v13.84c0 1-.84 1.52-1.56 1.84-.48.2-.8.56-.8 1.08 0 .68.48 1.16 1.16 1.2h7.84c.64 0 1.16-.52 1.16-1.2 0-.52-.36-.92-.88-1.12-.68-.24-1.48-.8-1.48-1.8V83.04h3.68c1.12.04 1.04-1.84 0-1.88h-3.68v-.92c0-3.88.32-6.48 2.32-6.48 1.4 0 1.84.88 1.84 1.72 0 .44-.16 1.44.52 2.28 1.88 2.24 5.52-.24 3.24-3.36Zm14.727 15c-2.4-1.48-4.92-2.44-4.92-4.52 0-1.44 1.08-2.64 3.2-2.64 2.04 0 3.24 1.36 3.4 2.4.12.8-.12 1.52.2 2.32.4 1.04 1.48 1.96 2.88 1.56 1.72-.48 1.88-2.64 1.16-3.88-.56-1-2.16-3.92-7.76-3.92-5.44 0-8.6 2.56-8.6 5.6 0 2.76 3.2 4.72 6.64 6.68 2.32 1.32 4.84 2.4 4.84 4.2 0 1.52-1.12 2.56-3.36 2.56-2.24 0-3.52-1.32-3.68-2.32-.12-.8.08-1.4-.2-2.4-.32-1.16-1.6-1.96-3-1.44-1.84.64-1.64 2.88-1.12 3.84.56.92 2.28 3.88 8.12 3.88 5.48 0 8.68-2.56 8.68-5.64 0-2.72-2.16-3.6-6.48-6.28Zm17.895 12.04c6.68 0 9.68-4.6 9.68-10.36 0-5.8-3-10.4-9.68-10.4-6.64 0-10 4.6-10 10.4 0 5.76 3.36 10.36 10 10.36Zm-.04-1.56c-2.8 0-4.12-4.16-4.12-8.8 0-4.68 1.32-8.84 4.12-8.84s3.88 4.16 3.88 8.84c0 4.64-1.08 8.8-3.88 8.8Zm32.405-1.2c-.68-.28-1.48-.8-1.48-1.8v-8.6c0-4.48-2.68-7.28-6.52-7.28-2.76 0-5 1.64-5.88 3.2v-2.24c0-.96-.56-1.08-1.12-.96l-5.84 1.08c-.52.12-.84.6-.84 1.12 0 .52.32.96.76 1.12.76.4 1.6.76 1.6 2.84v9.72c0 1-.84 1.52-1.56 1.84-.48.2-.8.56-.8 1.08 0 .68.48 1.16 1.16 1.2h7.76c.64 0 1.16-.52 1.16-1.2 0-.52-.36-.92-.88-1.12-.72-.28-1.4-.8-1.4-1.8v-8.84c0-2.12 1.84-3.44 3.44-3.44 1.28 0 3.52.76 3.52 4.44v7.84c0 1-.76 1.56-1.48 1.84-.48.2-.8.56-.8 1.08 0 .68.48 1.16 1.16 1.2h7.76c.64 0 1.16-.52 1.16-1.2 0-.52-.36-.92-.88-1.12Zm21.305-15.36c2.4 0 2.64-3.96-1.24-4.36-1.48-.16-3.4.6-4.24 2.4-1.12-.56-2.48-.84-4.48-.84-5.4 0-8.56 3.24-8.56 8.24 0 2.68.92 4.84 2.52 6.28-1.8.6-2.64 1.92-2.64 3.6 0 1.36.6 2.28 1.8 2.92-2.2.44-4.2 1.4-4.2 3.36 0 3.8 6.84 4.88 11.4 4.88 6.4 0 11.2-1.72 11.2-6 0-4.32-6-4.36-9.92-4.68-2.88-.24-6.88-.64-7.32-1.92-.2-.56.4-1 1.16-1.16 1.32.6 2.88.92 4.56.92 5.8 0 8.24-3.24 8.24-8.2 0-2.92-.84-5.24-2.6-6.68.88-1.28 2.36-1.92 2.32-1.08-.08 1.32.68 2.32 2 2.32Zm-10 12.08c-2 0-3.04-2.64-3.04-6.64 0-4.04 1.04-6.68 3.04-6.68 1.64 0 2.8 2.64 2.8 6.68 0 4-1.2 6.64-2.8 6.64Zm6.68 9.72c0 1.52-2.56 2.76-6.36 2.76-1.44 0-4.6-.28-5.6-1.88-.84-1.24.12-3.24 2.76-3.12 1.16.16 2.28.28 3.52.44 3.72.4 5.68.24 5.68 1.8Zm15.196-15.72c-2.4-1.48-4.92-2.44-4.92-4.52 0-1.44 1.08-2.64 3.2-2.64 2.04 0 3.24 1.36 3.4 2.4.12.8-.12 1.52.2 2.32.4 1.04 1.48 1.96 2.88 1.56 1.72-.48 1.88-2.64 1.16-3.88-.56-1-2.16-3.92-7.76-3.92-5.44 0-8.6 2.56-8.6 5.6 0 2.76 3.2 4.72 6.64 6.68 2.32 1.32 4.84 2.4 4.84 4.2 0 1.52-1.12 2.56-3.36 2.56-2.24 0-3.52-1.32-3.68-2.32-.12-.8.08-1.4-.2-2.4-.32-1.16-1.6-1.96-3-1.44-1.84.64-1.64 2.88-1.12 3.84.56.92 2.28 3.88 8.12 3.88 5.48 0 8.68-2.56 8.68-5.64 0-2.72-2.16-3.6-6.48-6.28ZM31.48 149.08c2.56 0 4.28-.92 5.36-2.32v1.36c0 .96.56 1.04 1.12.96l5.48-.52c.76-.08 1.2-.52 1.2-1.16 0-.52-.32-.92-.76-1.12-.8-.36-1.6-.76-1.6-2.84v-7.08c0-5.72-3.36-7.64-8.52-7.64-2.88 0-6.08.96-7.28 3.84-1.08 2.52 2.08 4.68 3.88 2.4.56-.72.4-1.28.52-2.32.12-1.16 1.36-2.36 2.88-2.36 2.64 0 3.08 2.88 3.08 6v.64c-3.68.28-11.04.64-11.04 6.52 0 3.76 2.72 5.64 5.68 5.64Zm.16-5.72c0-3.84 2.32-4.64 5.2-4.84v4.08c0 4.08-5.2 6.2-5.2.76Zm35.274 3.32c-.68-.28-1.48-.8-1.48-1.8v-8.6c0-4.48-2.68-7.28-6.52-7.28-2.76 0-5 1.64-5.88 3.2v-2.24c0-.96-.56-1.08-1.12-.96l-5.84 1.08c-.52.12-.84.6-.84 1.12 0 .52.32.96.76 1.12.76.4 1.6.76 1.6 2.84v9.72c0 1-.84 1.52-1.56 1.84-.48.2-.8.56-.8 1.08 0 .68.48 1.16 1.16 1.2h7.76c.64 0 1.16-.52 1.16-1.2 0-.52-.36-.92-.88-1.12-.72-.28-1.4-.8-1.4-1.8v-8.84c0-2.12 1.84-3.44 3.44-3.44 1.28 0 3.52.76 3.52 4.44v7.84c0 1-.76 1.56-1.48 1.84-.48.2-.8.56-.8 1.08 0 .68.48 1.16 1.16 1.2h7.76c.64 0 1.16-.52 1.16-1.2 0-.52-.36-.92-.88-1.12Zm22.106-.48c-.76-.36-1.6-.76-1.6-2.84V121.2c0-.96-.56-1.08-1.12-.96l-5.84 1.08c-.52.08-.84.6-.84 1.12 0 .52.32.96.76 1.12.76.4 1.6.76 1.6 2.84v4.04c-1.08-1.32-2.92-1.88-4.48-1.88-6.6 0-9.12 4.52-9.12 10.2 0 5.72 2.52 10.24 9.12 10.24 1.6 0 3.36-.68 4.48-2.12v1.16c0 .96.56 1.04 1.12.96l5.48-.52c.76-.08 1.2-.52 1.2-1.16 0-.52-.32-.92-.76-1.12Zm-11.08.88c-2.76 0-3.8-3.72-3.8-8.32 0-4.56 1.04-8.52 3.8-8.52s4 3.96 4.04 8.52v.44c-.04 5-1.36 7.88-4.04 7.88Zm31.1-18.12c-1.56 0-3.32.72-4.44 2.12v-1.12c0-.96-.56-1.08-1.12-.96l-5.84 1.08c-.48.12-.84.6-.84 1.12 0 .52.32.96.76 1.12.76.4 1.6.76 1.6 2.84v18.52c0 1-.84 1.52-1.56 1.84-.48.2-.8.56-.8 1.08 0 .68.48 1.16 1.16 1.2h7.84c.64 0 1.16-.52 1.16-1.2 0-.52-.36-.96-.88-1.12-.72-.24-1.48-.8-1.48-1.8v-6.04c1.08 1.28 2.88 1.76 4.44 1.76 6.6 0 9.16-4.52 9.16-10.2 0-5.72-2.56-10.24-9.16-10.24Zm-.4 18.76c-2.76 0-4.04-3.96-4.04-8.52v-.44c0-5 1.36-7.88 4.04-7.88 2.76 0 3.8 3.72 3.8 8.32 0 4.56-1.04 8.52-3.8 8.52Zm21.363 1.72c6.68 0 9.68-4.6 9.68-10.36 0-5.8-3-10.4-9.68-10.4-6.64 0-10 4.6-10 10.4 0 5.76 3.36 10.36 10 10.36Zm-.04-1.56c-2.8 0-4.12-4.16-4.12-8.8 0-4.68 1.32-8.84 4.12-8.84s3.88 4.16 3.88 8.84c0 4.64-1.08 8.8-3.88 8.8Zm31.95-1.68c-.76-.36-1.6-.76-1.6-2.84V121.2c0-.96-.56-1.08-1.12-.96l-5.84 1.08c-.52.08-.84.6-.84 1.12 0 .52.32.96.76 1.12.76.4 1.6.76 1.6 2.84v4.04c-1.08-1.32-2.92-1.88-4.48-1.88-6.6 0-9.12 4.52-9.12 10.2 0 5.72 2.52 10.24 9.12 10.24 1.6 0 3.36-.68 4.48-2.12v1.16c0 .96.56 1.04 1.12.96l5.48-.52c.76-.08 1.2-.52 1.2-1.16 0-.52-.32-.92-.76-1.12Zm-11.08.88c-2.76 0-3.8-3.72-3.8-8.32 0-4.56 1.04-8.52 3.8-8.52s4 3.96 4.04 8.52v.44c-.04 5-1.36 7.88-4.04 7.88Zm27.573-4.88c-1.04 1.4-.04 2.64-.68 3.72-.68 1.08-1.8 1.76-3.68 1.76-3.04 0-4.92-3.36-4.92-8.6 0-4.6 1.4-8.88 4.76-8.88 1.36 0 2.4.64 3 1.72.8 1.36-.4 2.76.92 4.52 1.24 1.6 5.44.68 3.6-3.32-1.32-2.76-4.12-4.48-8.08-4.48-6.6 0-10.04 4.56-10.04 10.44 0 5.8 3.44 10.4 10.04 10.4 3.08 0 5.32-1.12 6.84-2.72.52-.56 1-1.12 1.32-1.8 1.56-3.36-2-4.28-3.08-2.76Zm10.151 6.88c2.56 0 4.28-.92 5.36-2.32v1.36c0 .96.56 1.04 1.12.96l5.48-.52c.76-.08 1.2-.52 1.2-1.16 0-.52-.32-.92-.76-1.12-.8-.36-1.6-.76-1.6-2.84v-7.08c0-5.72-3.36-7.64-8.52-7.64-2.88 0-6.08.96-7.28 3.84-1.08 2.52 2.08 4.68 3.88 2.4.56-.72.4-1.28.52-2.32.12-1.16 1.36-2.36 2.88-2.36 2.64 0 3.08 2.88 3.08 6v.64c-3.68.28-11.04.64-11.04 6.52 0 3.76 2.72 5.64 5.68 5.64Zm.16-5.72c0-3.84 2.32-4.64 5.2-4.84v4.08c0 4.08-5.2 6.2-5.2.76Zm42.714 5.2c1.84-.76 1.24-3.08-.56-2.64-.64.12-2.6 1-2.6-2.96V131h3.4c1.36 0 1.32-1.8 0-1.8h-3.4v-2.72c0-4.12-3-6.6-7.84-6.6-4.12 0-7.16 2.76-7.16 6.44 0 1.04.28 2.16.8 2.88-.8-.36-1.92-.48-2.92-.48-5.6 0-8.6 2.48-8.6 5.6 0 2.96 3.48 4.84 6.92 6.8 2.32 1.32 4.52 2.28 4.52 4.08 0 1.52-1.08 2.56-3.28 2.56-2.36 0-3.6-1.32-3.76-2.32-.12-.8.08-1.4-.2-2.4-.28-1.04-1.4-2.08-2.88-1.56-2.04.68-1.68 3.12-1.2 3.96.56.92 2.2 3.88 8.04 3.88 5.52 0 8.8-2.56 8.8-5.64 0-2.88-2.44-3.8-6.76-6.48-2.4-1.48-4.72-2.56-4.72-4.12s1.28-2.84 3.24-2.84c2.12 0 3.24 1.36 3.4 2.4.12.8-.12 1.52.2 2.32.4 1.04 1.48 1.92 2.8 1.56 2.12-.56 1.8-3.04 1.28-3.88-.28-.44-.92-1.24-1.84-2.16-.96-.92-1.96-1.92-1.96-4.16 0-2.8 2.16-4.96 5.28-4.96 4.2 0 5.36 4.2 3.4 5.6-1.04.8-1.96 1.52-3.2 2.36-.76.52-.68 1.68.24 1.68h2.12v12.72c0 4.36 3.92 6.72 8.44 4.84Zm12.518-11.16c-2.4-1.48-4.92-2.44-4.92-4.52 0-1.44 1.08-2.64 3.2-2.64 2.04 0 3.24 1.36 3.4 2.4.12.8-.12 1.52.2 2.32.4 1.04 1.48 1.96 2.88 1.56 1.72-.48 1.88-2.64 1.16-3.88-.56-1-2.16-3.92-7.76-3.92-5.44 0-8.6 2.56-8.6 5.6 0 2.76 3.2 4.72 6.64 6.68 2.32 1.32 4.84 2.4 4.84 4.2 0 1.52-1.12 2.56-3.36 2.56-2.24 0-3.52-1.32-3.68-2.32-.12-.8.08-1.4-.2-2.4-.32-1.16-1.6-1.96-3-1.44-1.84.64-1.64 2.88-1.12 3.84.56.92 2.28 3.88 8.12 3.88 5.48 0 8.68-2.56 8.68-5.64 0-2.72-2.16-3.6-6.48-6.28Zm10.375 11.6c1.6 0 2.36-1.12 2.36-2.52 0-1.48-.76-2.56-2.36-2.56-1.6 0-2.44 1.08-2.44 2.56 0 1.4.84 2.52 2.44 2.52Z"
    />
    <G filter="url(#a)" />
    <Defs></Defs>
  </Svg>
);
export default Happn;