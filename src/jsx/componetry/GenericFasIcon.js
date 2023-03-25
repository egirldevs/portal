import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function GenericFasIcon(props) {
    return (
        <div className="rowItem">
            <FontAwesomeIcon icon={props.icon} size={props.size} data-tip={props.tooltip} style={props.style} href={props.link} />
        </div>
    );
};

export default GenericFasIcon;