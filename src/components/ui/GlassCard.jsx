export function GlassCard({ children, blur = 20, opacity = 0.05, borderOpacity = 0.1, className = '' }) {
  const style = {
    background: `rgba(255, 255, 255, ${opacity})`,
    backdropFilter: `blur(${blur}px)`,
    WebkitBackdropFilter: `blur(${blur}px)`,
    border: `1px solid rgba(255, 255, 255, ${borderOpacity})`,
  };
  return (
    <div style={style} className={`rounded-2xl shadow-2xl transition-shadow duration-300 ${className}`}>
      {children}
    </div>
  );
}

GlassCard.Header = function ({ children, className = '' }) {
  return <div className={`p-8 border-b border-white/10 ${className}`}>{children}</div>;
};

GlassCard.Body = function ({ children, className = '' }) {
  return <div className={`p-8 ${className}`}>{children}</div>;
};