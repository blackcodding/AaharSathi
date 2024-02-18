interface IColorsProps {
    textColor?: string;
    borderColor?: string;
    backgroundColor?: string;
}

export interface IDefaultButtonProps {
    text: string;
    colors?: IColorsProps;
    alignSelf?: 'center' | 'flex-start' | 'flex-end';
}

export interface IGenerateStyleProps {
    colors?: IColorsProps;
    alignSelf?: 'center' | 'flex-start' | 'flex-end';
}