import React, { useRef, useState } from "react";
import styled from "styled-components";
import MarkdownPreview from "@uiw/react-markdown-preview";
import Button from "../components/Button/Button";
import InputTextarea from "../components/Textfield/InputTextarea";
import colors from "../utils/colors/colors";
import { PageProps } from "../utils/types/interfaces";
import {
  CreateArticleMutation,
  useCreateArticleMutation,
} from "../generated/queries";
import { useAuth0 } from "@auth0/auth0-react";

const Upload: React.FunctionComponent<PageProps> = ({ client }) => {
  const [md, setMd] = useState<string | undefined>("");
  const [heading, setHeading] = useState<string | undefined>("");
  const { user } = useAuth0();
  const headingRef = useRef<HTMLTextAreaElement>(null);
  const bodyRef = useRef<HTMLTextAreaElement>(null);

  const createArticle = useCreateArticleMutation<CreateArticleMutation, Error>(
    client,
    {
      onSuccess: () => {
        alert(
          "Article created! Please visit the overview to see the new article"
        );
      },
    }
  );

  const uploadArticle = () => {
    createArticle.mutate({
      article: {
        textHeading: heading!,
        textBody: md!,
        authorName: user?.nickname!,
      },
    });
  };

  const onTypeMarkdown = () => {
    setMd(bodyRef.current?.value);
  };

  const onTypeHeading = () => {
    setHeading(headingRef.current?.value);
  };

  const placeholderText =
    "Important: type new Article in html tags to ensure formatting";

  return (
    <Wrapper>
      <UploadWrapper>
        <SHeading>Upload</SHeading>
        <HeadingTextfield
          placeholder="Heading without any format"
          maxLength={75}
          heading="Heading"
          forwardedRef={headingRef}
          onChange={onTypeHeading}
        />
        <BodyTextfield
          placeholder={placeholderText}
          maxLength={10000}
          contextMessage={placeholderText}
          heading="Content"
          forwardedRef={bodyRef}
          onChange={onTypeMarkdown}
        />
        <SButton onPressHandler={uploadArticle}>Upload</SButton>
      </UploadWrapper>
      <MarkdownPreviewWrapper>
        <h1>{heading}</h1>
        <MarkdownPreview source={md} />
      </MarkdownPreviewWrapper>
    </Wrapper>
  );
};

export default Upload;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  height: 100%;
  padding: 20px;
`;

const UploadWrapper = styled.div`
  width: 50%;
  padding: 5px;
`;

const MarkdownPreviewWrapper = styled.div`
  width: 50%;
  padding: 5px;
`;

const SHeading = styled.h1`
  margin-top: 10px;
`;

const HeadingTextfield = styled(InputTextarea)`
  height: 25px;
`;

const BodyTextfield = styled(InputTextarea)`
  height: 250px;
`;

const SButton = styled(Button)`
  background-color: ${colors.primary.GRAY_1};
  margin-top: 10px;
`;
