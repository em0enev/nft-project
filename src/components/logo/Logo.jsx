export default function Logo({ type = "default" }) {
    if (type === "muted") {
        return < img src="/images/logo-muted.svg" ></img >
    }
    else if (type === "default") {
        return < img src="/images/logo.svg" ></img >
    }
}