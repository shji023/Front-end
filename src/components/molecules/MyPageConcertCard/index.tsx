import { Img, Link, Tag } from 'components/atoms';
import React from 'react';
import Styled from 'styled-components';
import { palette } from 'styled-tools';

export interface IProps {
  imagePath?: string;
  tagName: string;
  tagColor?: string;
  title: string;
  content: string;
  date: string;
  id: string;
}

function MyPageConcertCard({
  imagePath = '',
  tagName,
  tagColor = '5',
  title,
  content,
  date,
  id,
}: IProps): React.ReactElement {
  return (
    <LinkWrapper to={`/concert/${id}`}>
      <span>
        <div className="card">
          <div className="card__img-wrapper">
            <Img src={imagePath} />
          </div>
          <div className="card__info">
            <Tag className="subhead2" name={tagName} color={tagColor} isSelected={false} />
            <div className="card__info--title subhead4">{title}</div>
            <div className="card__info--content body2" dangerouslySetInnerHTML={{ __html: `${content}` }}></div>
            <div className="card__info--date body1_eng">{date}</div>
          </div>
        </div>
      </span>
    </LinkWrapper>
  );
}

const LinkWrapper = Styled(Link)`
  span {
    display: inline-block;
  }

  .card {
    display: flex;
    border-radius: 10px;
    width: 516px;
    height: 214px;
    padding: 0 20px 0 0;
    box-shadow: 0 0 24px 0 rgba(13, 12, 63, 0.1);

    &__img-wrapper {
      width: 200px;
      height: 214px;
      margin: 0 20px 0 0;
      object-fit: cover;
      border-radius: 10px 0 0 10px;

      img {
        border-radius: 10px 0 0 10px;
      }
    }

    &__info {
      margin: 20px 0;

      * {
        overflow: hidden;
        text-overflow: ellipsis;
      }

      &--title {
        width: 274px;
        margin: 33px 0 10px 2px;
        color: ${palette('grayscale', 7)};
        white-space: nowrap;
      }

      &--content {
        width: 238px;
        height: 2.6em;
        margin: 0 0 24px 1px;
        color: ${palette('grayscale', 4)};
        text-align: left;
        white-space: normal;
        word-wrap: break-word;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
      }

      &--date {
        margin-left: 4px;
        color: ${palette('grayscale', 4)};
      }
    }
  }
`;

export default MyPageConcertCard;