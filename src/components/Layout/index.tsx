import { LayoutProps } from "./types";

import * as S from "./styles";

export const Layout: React.FC<LayoutProps> = ({
  children,
}) => {
  return (
    <S.Container>
      <S.ResponsiveContainer>{children}</S.ResponsiveContainer>
    </S.Container>
  );
};
