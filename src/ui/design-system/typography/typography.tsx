import clsx from "clsx";
import React from "react";

interface Props{
    variant?: "display" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "lead" | "body-lg" | "body-base" | "body-sm" | "caption1" | "caption2" | "caption3" | "caption4";
    children: React.ReactNode;
    component?: "h1"|"h2"|"h3"|"h4"|"h5"|"div"|"p"|"span";
    theme?: "black" | "grey" | "white" | "primary" | "secondary";
    weight?: "regular" | "medium";
    className?: string;
}

export const Typography = ({
                               variant ="h3",
                               children,
                               component:Component = "div",
                               theme = "black",
                               weight= "regular",
                               className,

                            }:Props) => {

    let variantStyles : string = "", colorStyles: string = "";

        switch (variant) {
            case "display":
                variantStyles = "text-8xl";
                break;
            case "h1":
                variantStyles = "text-7xl"
                break;
            case "h2":
                variantStyles = "text-6xl"
                break;
            case "h3": // Default
                variantStyles = "text-5xl"
                break;
            case "h4":
                variantStyles = "text-4xl"
                break;
            case "h5":
                variantStyles = "text-3xl"
                break;
            case "h6":
                variantStyles = "text-1xl"
                break;
            case "lead":
                variantStyles = "text-2xl"
                break;
            case "body-lg":
                variantStyles = "text-4xl"
                break;
            case "body-base":
                variantStyles = "text-base"
                break;
            case "body-sm":
                variantStyles = "text-sm"
                break;
            case "caption1":
                variantStyles = "text-caption1"
                break;
            case "caption2":
                variantStyles = "text-caption2"
                break;
            case "caption3":
                variantStyles = "text-caption3"
                break;
            case "caption4":
                variantStyles = "text-caption4"
                break;
        }
            switch (theme) {
                case "black": // Default
                    colorStyles = "text-grey";
                    break;
                case "grey":
                    colorStyles = "text-grey-700";
                    break;
                case "white":
                    colorStyles = "text-white";
                    break;
                case "primary":
                    colorStyles = "text-primary";
                    break;
                case "secondary":
                    colorStyles = "text-secondary";
                    break;
                default:
                    break;
            }

       return <Component
           className={clsx(variantStyles,
               colorStyles,
               weight === "medium" && "font-medium",
               className)}>
           {children}
        </Component>

}; 