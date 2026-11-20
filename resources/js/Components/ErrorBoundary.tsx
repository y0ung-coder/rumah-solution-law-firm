import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
    children: ReactNode;
    fallback?: ReactNode;
}

interface State {
    hasError: boolean;
    error: Error | null;
    errorInfo: ErrorInfo | null;
}

export class ErrorBoundary extends Component<Props, State> {
    public state: State = {
        hasError: false,
        error: null,
        errorInfo: null,
    };

    public static getDerivedStateFromError(error: Error): Partial<State> {
        return { hasError: true, error };
    }

    public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        this.setState({ errorInfo });
        console.error('ErrorBoundary caught:', error, errorInfo);
    }

    public render() {
        if (this.state.hasError) {
            return (
                this.props.fallback || (
                    <div className="p-8 max-w-3xl mx-auto my-12 bg-white rounded-sm border border-rose-200 shadow-lg text-left">
                        <h2 className="font-serif text-xl font-bold text-rose-800 mb-2">
                            Pesan Diagnostik Error:
                        </h2>
                        <div className="p-4 bg-rose-50 border border-rose-200 rounded-sm font-mono text-xs text-rose-900 mb-4 whitespace-pre-wrap break-all">
                            {this.state.error?.name}: {this.state.error?.message}
                        </div>
                        {this.state.error?.stack && (
                            <pre className="p-4 bg-slate-900 text-slate-100 rounded-sm text-[11px] overflow-x-auto max-h-60 mb-4 font-mono leading-relaxed">
                                {this.state.error.stack}
                            </pre>
                        )}
                        <button
                            onClick={() => window.location.reload()}
                            className="px-5 py-2.5 bg-[#172B3A] text-white text-xs font-semibold rounded-sm hover:bg-[#B89B69] transition-colors"
                        >
                            Muat Ulang Halaman
                        </button>
                    </div>
                )
            );
        }

        return this.props.children;
    }
}
