import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/lib/supabase";
import { LoginForm } from "@/components/auth/LoginForm";
import { AuthBackground } from "@/components/auth/AuthBackground";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Shield } from "lucide-react";

const Index = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        if (session?.user) {
          navigate("/dashboard");
        }
        setIsLoading(false);
      }
    );

    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session?.user) {
        navigate("/dashboard");
      }
      setIsLoading(false);
    });

    return () => subscription.unsubscribe();
  }, [navigate]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <AuthBackground />
      <ThemeToggle />
      <div className="w-full max-w-md">
        <div className="login-card glass-effect animate-float" style={{ animationDuration: '8s' }}>
          {/* Logo / Brand */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-4" style={{ background: 'var(--gradient-primary)' }}>
              <Shield className="w-8 h-8 text-primary-foreground" />
            </div>
            <h1 className="text-3xl font-semibold font-heading text-foreground mb-2">
              Bienvenido
            </h1>
            <p className="text-muted-foreground">
              Accede a tu panel de administración
            </p>
          </div>

          {/* Login Form */}
          <LoginForm />

          {/* Footer */}
          <p className="text-center text-xs text-muted-foreground mt-8">
            Acceso exclusivo para administradores autorizados
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
