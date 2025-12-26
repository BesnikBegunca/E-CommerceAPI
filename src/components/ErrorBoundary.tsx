// ErrorBoundary.tsx
import { Component, } from "react";

interface Props { children: React.ReactNode; }
interface State { hasError: boolean; }

export class ErrorBoundary extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(_: Error) { return { hasError: true }; }

    componentDidCatch(error: Error, info: any) {
        console.error("ErrorBoundary caught:", error, info);
    }

    render() {
        if (this.state.hasError) return <h2>Diçka shkoi gabim në komponent</h2>;
        return this.props.children;
    }
}
