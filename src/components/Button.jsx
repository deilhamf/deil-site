/**
 * @copyright 2024 deil
 * @license Apache-2.0
 */

/**
 * Node Modules
 */
import PropTypes from "prop-types";

const handleCVDownload = () => {
  // Replace this URL with the actual URL of your CV file
    const cvUrl = '/cv/cv.pdf';

  // Create a temporary anchor element
    const link = document.createElement('a');
    link.href = cvUrl;
    link.setAttribute('download', 'cv-deil.pdf'); // Replace with your desired file name

  // Append to the body, click, and remove
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};

const ButtonPrimary = ({
    href,
    target = '_self',
    label,
    icon,
    classes,
    onClick
}) => {
    const handleClick = (e) => {
        if (onClick) {
        onClick(e);
        }
        if (label.toLowerCase().includes('cv') || label.toLowerCase().includes('download')) {
        handleCVDownload();
        }
    };

    if (href) {
        return (
        <a
            href={href}
            target={target}
            className={"btn btn-primary " + classes}
            onClick={handleClick}
        >
            {label}
            {icon ?
            <span className="material-symbols-rounded" aria-hidden="true">
                {icon}
            </span>
            : undefined
            }
        </a>
        )
    } else {
        return (
            <button className={"btn btn-primary " + classes} onClick={handleClick}>
                {label}
                {icon ?
                <span className="material-symbols-rounded" aria-hidden="true">
                    {icon}
                </span>
                : undefined
                }
            </button>
        )
    }
}

ButtonPrimary.propTypes = {
    label: PropTypes.string.isRequired,
    href: PropTypes.string,
    target: PropTypes.string,
    icon: PropTypes.string,
    classes: PropTypes.string,
    onClick: PropTypes.func
}

const ButtonOutline = ({
    href,
    target = '_self',
    label,
    icon,
    classes
}) => {
    if (href) {
        return (
        <a
            href={href}
            target={target}
            className={"btn btn-outline " + classes}
        >
            {label}
            {icon ?
            <span className="material-symbols-rounded" aria-hidden="true">
            {icon}
            </span>
            : undefined
        }
        </a>
    )
    } else {
        return (
            <button className={"btn btn-outline " + classes}>
                {label}
                {icon ?
                <span className="material-symbols-rounded" aria-hidden="true">
                    {icon}
                </span>
                : undefined
                }
            </button>
        )
    }
}

ButtonOutline.propTypes = {
    label: PropTypes.string.isRequired,
    href: PropTypes.string,
    target: PropTypes.string,
    icon: PropTypes.string,
    classes: PropTypes.string
}

export {
    ButtonPrimary,
    ButtonOutline
}