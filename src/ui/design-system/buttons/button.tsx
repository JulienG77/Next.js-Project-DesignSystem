import clsx from "clsx";
import {IconProps} from "../../../types/iconProps";
import React from "react";
import {Spinner} from "../spinner/spinner";

interface Props {
    size?: "small" | "medium" | "large";
    variant?: "accent" | "secondary" | "outline" | "disabled" | "icon";
    icon?: IconProps ;
    iconTheme?: "accent" | "secondary" | "grey";
    iconPosition?: "left" | "right";
    disabled?: boolean;
    isLoading?: boolean;
    children?: React.ReactNode;
}

export const Button = ({
    size = "medium",
    variant = "accent",
    icon,
    iconTheme = "accent",
    iconPosition = "right",
    disabled,
    isLoading,
    children,

    }: Props) => {

    let variantStyles: string = "",
        sizeStyles: string = "",
        iconSize: number = 0;

    switch (variant) {
        case "accent": //Default
            variantStyles = "bg-primary hover:bg-primary-400 text-white rounded";
            break;
        case "secondary":
            variantStyles = "bg-primary-200 hover:bg-primary-300/50 text-primary rounded";
            break;
        case "outline":
            variantStyles = "bg-white hover:bg-grey-400/50 border border-grey-500 text-grey-900 rounded";
            break;
        case "disabled":
            variantStyles = "bg-grey-400 border border-grey-500 text-grey-600 rounded cursor-not-allowed";
            break;
        case "icon":
            if (iconTheme === "accent") {
                variantStyles = "bg-primary hover:bg-primary-400 text-white rounded-full";
            }
            if (iconTheme === "secondary"){
                variantStyles = "bg-primary-200 hover:bg-primary-300/50 text-primary rounded-full"
            }
            if (iconTheme === "grey"){
                variantStyles = "bg-grey-700 hover:bg-grey-600 text-white rounded-full"
            }
            break;
    }

    switch (size) {
        case "small":
            sizeStyles = `text-caption3 font-medium ${
                variant === "icon"
                    ? "flex items-center justify-center w-[40px] h-[40px]"
                    : "px-[14px] py-[12px]"
            }`;
            iconSize = 18;
            break;

        case "medium": // Default
            sizeStyles = `text-caption2 flex font-medium justify-center h-[50px] ${
                variant === "icon"
                    ? "flex items-center justify-center w-[50px]"
                    : "px-[20px] py-[15px]"
            }`;
            iconSize = 20;
            break;

        case "large":
            sizeStyles = `text-caption1 font-medium ${
            variant === "icon"
                ? "flex items-center justify-center w-[60px] h-[60px]"
                : "px-[24px] py-[18px]"
    }`;
            iconSize = 24;
            break;
    }

    return (
        <>
            <button type="button"
                    className={clsx(
                        variantStyles,
                        iconSize,
                        sizeStyles,
                        isLoading && "cursor-wait","relative animate")}
                    onClick={() => console.log('click')}
                    disabled={disabled}
            >
                {isLoading && (
                    <div className="absolute inset-0 flex items-center justify-center">

                    {variant === "accent" || variant ==="icon" ? (
                        <Spinner size="small" variant="white"/>
                    ) : (
                        <Spinner size="small"/>
                    )}
                    </div>
                )}

                <div className={clsx(isLoading && "invisible")}>

                   {icon && variant === "icon" ? (
                        <icon.icon size={iconSize}/>

                    ) : (
                        <div className={clsx(icon && "flex items-center gap-2")}>
                            {icon && iconPosition === "left" && (
                                <icon.icon size={iconSize}/>
                           )}
                            {children}

                            {icon && iconPosition === "right" && (
                                <icon.icon size={iconSize}/>
                            )}
                        </div>
                )}
                </div>
                {/*    {icon && variant === "icon" ? <></> : <>{children}</>} */}
            </button>
        </>
    );
};