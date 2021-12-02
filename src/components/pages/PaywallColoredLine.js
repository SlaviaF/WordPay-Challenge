const PaywallColoredLine = ({ color, width, margin }) => (
    <hr
        style={{
            width:width,
            backgroundColor: color,
            marginBottom:margin,
            height: "14px", 
            border:"none"
        }}
    />
);

export default PaywallColoredLine;