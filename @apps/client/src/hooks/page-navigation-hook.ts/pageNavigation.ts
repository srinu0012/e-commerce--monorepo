import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

export function usePageNavigation(page: string) {
  const navigate = useNavigate();
  const goToPage = useCallback(() => {
    navigate(`/${page}`);
  }, [page]);
  return goToPage;
}
