export const AuthBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-background">
      {/* Decorative circles */}
      <div 
        className="absolute -top-40 -right-40 w-96 h-96 rounded-full opacity-30 animate-pulse-soft"
        style={{ background: 'hsl(52 96% 65%)' }}
      />
      <div 
        className="absolute -bottom-32 -left-32 w-80 h-80 rounded-full opacity-20 animate-pulse-soft"
        style={{ 
          background: 'hsl(52 96% 65%)',
          animationDelay: '1.5s'
        }}
      />
      <div 
        className="absolute top-1/3 left-1/4 w-64 h-64 rounded-full opacity-10 animate-float"
        style={{ background: 'hsl(52 96% 65%)' }}
      />
      
      {/* Subtle grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
            linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }}
      />
    </div>
  );
};
