import { Input, InputGroup, InputLeftElement, Show } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";

interface Props {
  onSearch: (searchText: string) => void;
}

function SearchInput({ onSearch }: Props) {
  const ref = useRef<HTMLInputElement>(null);
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (ref.current && ref.current.value.length)
          onSearch(ref.current.value);
      }}
    >
      <Show above="lg">
        <InputGroup paddingLeft={"180px"}>
          <InputLeftElement marginLeft={"180px"} children={<BsSearch />} />
          <Input
            ref={ref}
            borderRadius={20}
            placeholder="Search Games"
            variant={"filled"}
          />
        </InputGroup>
      </Show>
      <Show below="lg">
        <InputGroup>
          <InputLeftElement children={<BsSearch />} />
          <Input
            ref={ref}
            borderRadius={20}
            placeholder="Search Games"
            variant={"filled"}
          />
        </InputGroup>
      </Show>
    </form>
  );
}

export default SearchInput;
