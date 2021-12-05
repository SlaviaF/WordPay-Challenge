import "./PaywallColoredLine.css"
const PaywallColoredLine = ({ color, width, margin }) => (

    <div className="colored-bars-height"
        style={{
            maxWidth:width,
            backgroundColor: color,
            marginBottom:margin,
            border:"none"
          
        }}
    />
);

export default PaywallColoredLine;