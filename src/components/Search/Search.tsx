import React, { ReactChild, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { AiOutlineSearch } from "react-icons/ai/index";
import { Container, IconSpan, Input, InputGroup } from "./Search.styles";

const Search = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const inputRef = useRef<HTMLInputElement>(null);

  const handleRedirect = () =>
    inputRef.current ? navigate(`/profile/${inputRef.current.value}`) : null;
  const handleEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") handleRedirect();
  };
  return (
    <Container>
      <InputGroup>
        <Input
          type="search"
          placeholder={t("search.search")}
          ref={inputRef}
          onKeyDown={(e) => handleEnter(e)}
        />
        <IconSpan>
          <AiOutlineSearch />
        </IconSpan>
      </InputGroup>
    </Container>
  );
};

export default Search;
