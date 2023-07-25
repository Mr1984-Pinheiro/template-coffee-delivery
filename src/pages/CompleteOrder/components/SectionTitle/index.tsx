import { ReactNode } from "react";
import { RegularText } from "../../../../components/Typography";

interface SectionTitleProps {
    title: string;
    subtitle: string;   
    icon: ReactNode
}

export function SectionTitle({ title, subtitle, icon }: SectionTitleProps) {
    return(
        <div className="flex gap-2">
            {icon}
            <div>
                <RegularText color="subtitle">{title}</RegularText>
                <RegularText size="s">{subtitle}</RegularText>                
            </div>
        </div>
    )
}