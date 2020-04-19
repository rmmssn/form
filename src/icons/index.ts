export interface IBorderedIcons {
   size?: number | string;
   color?: string;
   border?: number | string;
}

export type IFilledIcons = Omit<IBorderedIcons, "border">;

export const FilledDefaults = {
   size: 24,
   color: "inherit"  
}

export const BorderedDefaults = {
   ...FilledDefaults,
   border: 2
}