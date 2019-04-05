import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  FacebookShareButton,
  FacebookIcon,
  LinkedinShareButton,
  LinkedinIcon,
  TwitterIcon,
  TwitterShareButton,
  EmailShareButton,
  EmailIcon,
  RedditShareButton,
  RedditIcon
} from "react-share";
import styled from "styled-components";
import { FaLinkedin } from "react-icons/fa";

const Container = styled.div`
  margin: 1rem 0 5rem;

  .social-icon {
    display: inline-block;
    margin: 0 0.5rem;
    cursor: pointer;
  }
`;

class Share extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: null
    };
  }
  componentDidMount() {
    this.setState({
      url: window.location.href
    });
  }
  render() {
    const { post } = this.props;
    const { url } = this.state;
    return (
      <Container>
        <p
          css={`
            font-size: 1.4rem;
            color: rgb(0, 0, 0);
          `}
        >
          Connect if you'd like:
        </p>
        <div>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/jason-schmitt-aa974932/"
          >
            <FaLinkedin size={25} style={{ color: "#4875B4" }} />
          </a>
        </div>
      </Container>
    );
  }
}

Share.propTypes = {
  post: PropTypes.shape({
    title: PropTypes.string.isRequired,
    excerpt: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired
  }).isRequired
};

export default Share;
