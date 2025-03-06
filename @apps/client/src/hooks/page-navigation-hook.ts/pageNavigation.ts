import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

export function usePageNavigation(page: string) {
  const navigate = useNavigate();
  const GoToPage = useCallback(() => {
    navigate(`/${page}`);
  }, [page]);

  return GoToPage;
}
