import React, { ChangeEvent } from 'react';
import { debounce } from 'underscore';

interface Props {
  value?: string;
  onUpdateSearchText: Function;
}

interface State {
  value?: string;
}

export class SearchBox extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      value: this.props.value || '',
    };
  }

  debouncedOnUpdateSearchText = debounce(this.props.onUpdateSearchText, 300);

  handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    this.setState({ value });
    this.debouncedOnUpdateSearchText(value);
  };

  render() {
    const { value } = this.state;
    return (
      <input
        className="input"
        type="text"
        placeholder="Search articles..."
        value={value}
        onChange={this.handleChange}
      ></input>
    );
  }
}
