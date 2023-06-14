function Button({ text, event, classes, icon }) {
    return (
        <div onClick={event} className={classes}>{text}{icon}</div>
    );
}

export default Button;