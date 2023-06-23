import {documentToReactComponents} from '@contentful/rich-text-react-renderer';
import {BLOCKS, INLINES, helpers, MARKS} from '@contentful/rich-text-types';
import {RichtTextContainer} from '../../StyledComponents/containers.css';
import {
  BC1,
  BC3,
  Heading1,
  Heading2,
  Heading3
} from '../../StyledComponents/typography.css';

const ContactUsRenderer = ({node, origin}) => {
  const defaultMarkRenderers = {
    [MARKS.BOLD]: (text, key) => <strong key={key}>{text}</strong>,
    [MARKS.ITALIC]: (text, key) => <em key={key}>{text}</em>,
    [MARKS.UNDERLINE]: (text, key) => <u key={key}>{text}</u>,
    [MARKS.CODE]: (text, key) => <BC1 key={key}>{text}</BC1>
  };

  const options = {
    renderMark: {
        [MARKS.CODE]: (text, key) => <><br/></>
    },
    renderNode: {
     
      [INLINES.HYPERLINK]: (node, children) => <a href={node.data.uri} target="_blank" style={{borderBottom: `.75px solid red`}}>{children}</a>,
      [BLOCKS.HEADING_1]: (node, children) => (
        <Heading1 marginBottom="md">{children}</Heading1>
      ),
      [BLOCKS.HEADING_2]: (node, children) => (
        <Heading2 marginBottom="md">{children}</Heading2>
      ),
      [BLOCKS.HEADING_3]: (node, children) => (
        <Heading3 marginBottom="md">{children}</Heading3>
      ),
      [BLOCKS.PARAGRAPH]: (node, children) => (
       
          <BC3 marginBottom="sm" color="black">{children}</BC3>
       
      )
    }
  };

  return (
    <RichtTextContainer origin={origin}>
      {documentToReactComponents(node, options)}
    </RichtTextContainer>
  );
};

export default ContactUsRenderer;
