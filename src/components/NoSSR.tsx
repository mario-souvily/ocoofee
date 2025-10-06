"use client";

import { useEffect, useState } from "react";

interface NoSSRProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

export default function NoSSR({ children, fallback = null }: NoSSRProps) {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    // Utiliser requestAnimationFrame pour s'assurer que le DOM est prêt
    const timer = requestAnimationFrame(() => {
      setHasMounted(true);
    });

    return () => cancelAnimationFrame(timer);
  }, []);

  // Pendant l'hydratation, afficher le fallback
  if (!hasMounted) {
    return <>{fallback}</>;
  }

  // Après l'hydratation, afficher le contenu
  return <>{children}</>;
}
