declare interface IComponentStrings {
  TestLabel: string
}

declare module 'ComponentStrings' {
  const strings: IComponentStrings;
  export = strings;
}
