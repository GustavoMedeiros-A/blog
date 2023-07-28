import Header from "./BlogHeader";
import SideBlog from "./BlogSide";
import * as Styled from "./style";

const TemplateBlogWrapper = () => {
  return (
    <Styled.FlexContainer>
      <SideBlog />
      <Header />
    </Styled.FlexContainer>
  );
};

export default TemplateBlogWrapper;
