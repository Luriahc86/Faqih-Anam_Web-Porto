import React, { Component, ErrorInfo, ReactNode } from 'react';
import { AlertTriangle, RefreshCw } from 'lucide-react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  private handleReload = () => {
    window.location.reload();
  };

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white flex items-center justify-center px-6">
          <div className="text-center max-w-md">
            <div className="mb-8">
              <AlertTriangle className="w-16 h-16 text-red-400 mx-auto mb-4 animate-pulse" />
              <h1 className="text-2xl font-bold mb-4">Oops! Something went wrong</h1>
              <p className="text-gray-400 mb-6">
                We encountered an unexpected error. Please try refreshing the page.
              </p>
              {process.env.NODE_ENV === 'development' && this.state.error && (
                <details className="text-left bg-gray-800/50 p-4 rounded-lg mb-6">
                  <summary className="cursor-pointer text-red-400 mb-2">Error Details</summary>
                  <pre className="text-xs text-gray-300 overflow-auto">
                    {this.state.error.toString()}
                  </pre>
                </details>
              )}
            </div>
            <button
              onClick={this.handleReload}
              className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 flex items-center gap-2 mx-auto"
            >
              <RefreshCw size={20} />
              Refresh Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;