function Button({ text, event, classes, icon, testid }) {
    return (
        <div data-testid={testid} onClick={event} className={classes}>{text}{icon}</div>
    );
}

export default Button;