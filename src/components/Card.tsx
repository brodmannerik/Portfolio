import React, { useEffect } from 'react'
import useScroll from './hooks/useScroll'
import { useHeaderText } from './hooks/useHeaderText'
import useResponsiveWidth from './hooks/useResponsiveStyles'
import GithubIcon from '/assets/images/github-mark.png'

type Card = {
  id: number
  type: string
  text: string
  presentation: string
  tech: string
  leftLocation: string
  image: string
  contentHeight: string
  contentHeightSmall: string
  link: string
  imageSize: string
  imageHeight: string
  imageHeightSmall: string
  image1: string
  image1Size: string
  image1Height: string
  image1HeightSmall: string
  image2: string
  image2Size: string
  image2Height: string
  image2HeightSmall: string
  image3: string
  image3Size: string
  image3Height: string
  image3HeightSmall: string
  image4: string
  image4Size: string
  image4Height: string
  image4HeightSmall: string
  innerContent1?: string
  innerContent2?: string
  innerContent2Height?: string
  innerContent2HeightSmall: string
  innerContent3?: string
  innerContent3Height: string
  innerContent3HeightSmall: string
  innerContent4?: string
  innerContent4Height: string
  innerContent4HeightSmall: string
  innerContent5?: string
  githubIconHeight: string
  githubIconHeightSmall: string
  project: string
  twoRows: string
}

const Card = ({
  id,
  type,
  text,
  presentation,
  tech,
  leftLocation,
  contentHeight,
  contentHeightSmall,
  link,
  image,
  imageSize,
  imageHeight,
  imageHeightSmall,
  image1,
  image1Size,
  image1Height,
  image1HeightSmall,
  image2,
  image2Size,
  image2Height,
  image2HeightSmall,
  image3,
  image3Size,
  image3Height,
  image3HeightSmall,
  image4,
  image4Size,
  image4Height,
  image4HeightSmall,
  innerContent1,
  innerContent2,
  innerContent2Height,
  innerContent2HeightSmall,
  innerContent3,
  innerContent3Height,
  innerContent3HeightSmall,
  innerContent4,
  innerContent4Height,
  innerContent4HeightSmall,
  githubIconHeight,
  githubIconHeightSmall,
  project,
  twoRows
}: Card): JSX.Element => {
  const fontFamilies =
    'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"'
  const { isCardHovered } = useHeaderText()
  const { cardRef, isScrolled, isOverflowed } = useScroll(isCardHovered)
  const { setIsCardHovered } = useHeaderText()
  const windowWidth = useResponsiveWidth()

  const bigScreen = windowWidth > 1800
  const screenToSmall = windowWidth < 1040
  const isSmallScreen = windowWidth < 415

  useEffect(() => {
    if (isOverflowed && isCardHovered && isScrolled && !screenToSmall) {
      const card = document.getElementById(`card-${id}`)
      if (card) {
        card.style.zIndex = '2'
        card.style.transform = 'scale(1.2)'
      }
    } else {
      const card = document.getElementById(`card-${id}`)
      if (card) {
        card.style.zIndex = '1'
        card.style.transform = 'scale(1)'
      }
    }
  }, [isOverflowed, isScrolled, id, screenToSmall, bigScreen])

  const handleClick = () => {
    window.location.href = link
  }

  const handleMouseEnter = () => {
    setIsCardHovered(true)
    const icon = document.getElementById(`icon-${id}`)
    if (icon) {
      icon.style.transform = 'rotate(90deg)'
    }
  }

  const handleMouseLeave = () => {
    setIsCardHovered(false)
    const icon = document.getElementById(`icon-${id}`)
    if (icon) {
      icon.style.transform = 'rotate(0deg)'
    }
  }

  return (
    <div
      id={`card-${id}`}
      className={'card'}
      ref={cardRef}
      style={{
        position: 'relative',
        overflow: 'auto'
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      {type === 'card' && (
        <div
          style={{
            width: isSmallScreen ? '250px' : '377px',
            height: '269px',
            borderRadius: '17px',
            border: isScrolled ? '' : '1px solid black'
          }}
          className="bg-card"
        >
          <div
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: '17px',
              height: isScrolled
                ? isSmallScreen
                  ? contentHeightSmall
                  : contentHeight
                : '0',
              border: isScrolled ? '1px solid black' : ''
            }}
          >
            <p
              style={{
                position: 'absolute',
                top: '12px',
                left: '18px',
                fontWeight: '700',
                fontSize: '24px',
                fontFamily: fontFamilies
              }}
            >
              {text}
            </p>
            <p
              style={{
                position: 'absolute',
                top: isSmallScreen && twoRows ? '85px' : '50px',
                left: '18px',
                fontWeight: '400',
                fontSize: '19px',
                lineHeight: '29.05px',
                fontFamily: fontFamilies
              }}
              id={`icon-${id}`}
            >
              {'>>'}
            </p>
            <p
              style={{
                position: 'absolute',
                width: isSmallScreen ? '215px' : '340px',
                top: '215px',
                left: '18px',
                border: '0.5px solid #000000',
                fontFamily: fontFamilies
              }}
            />
            <p
              style={{
                position: 'absolute',
                top: '225px',
                left: '18px',
                fontWeight: '400',
                fontSize: '19px',
                lineHeight: '29.05px',
                fontFamily: fontFamilies
              }}
            >
              {presentation}
            </p>
            {isSmallScreen ? (
              ''
            ) : (
              <p
                style={{
                  position: 'absolute',
                  top: '225px',
                  left: leftLocation,
                  fontWeight: '400',
                  fontSize: '19px',
                  lineHeight: '29.05px',
                  fontFamily: fontFamilies
                }}
              >
                {tech}
              </p>
            )}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '40px' }}>
              {innerContent1 ? (
                <p
                  style={{
                    position: 'absolute',
                    top: '280px',
                    left: '18px',
                    right: '18px',
                    fontWeight: '400',
                    fontSize: '12px',
                    lineHeight: '29.05px',
                    fontFamily: fontFamilies
                  }}
                >
                  {innerContent1}
                </p>
              ) : (
                ''
              )}
              {image ? (
                <img
                  style={{
                    position: 'absolute',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    top: isSmallScreen ? imageHeightSmall : imageHeight,
                    width: imageSize
                  }}
                  src={image}
                  alt={'image'}
                />
              ) : (
                ''
              )}
              {innerContent2 ? (
                <p
                  style={{
                    position: 'absolute',
                    top: isSmallScreen
                      ? innerContent2HeightSmall
                      : innerContent2Height,
                    left: '18px',
                    right: '18px',
                    fontWeight: '400',
                    fontSize: '12px',
                    lineHeight: '29.05px',
                    fontFamily: fontFamilies
                  }}
                >
                  {innerContent2}
                </p>
              ) : (
                ''
              )}
              {image1 ? (
                <img
                  style={{
                    position: 'absolute',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    top: isSmallScreen ? image1HeightSmall : image1Height,
                    width: image1Size
                  }}
                  src={image1}
                  alt={'image1'}
                />
              ) : (
                ''
              )}
              {innerContent3 ? (
                <p
                  style={{
                    position: 'absolute',
                    top: isSmallScreen
                      ? innerContent3HeightSmall
                      : innerContent3Height,
                    left: '18px',
                    right: '18px',
                    fontWeight: '400',
                    fontSize: '12px',
                    lineHeight: '29.05px',
                    fontFamily: fontFamilies
                  }}
                >
                  {innerContent3}
                </p>
              ) : (
                ''
              )}
              {image2 ? (
                <img
                  style={{
                    position: 'absolute',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    top: isSmallScreen ? image2HeightSmall : image2Height,
                    width: image2Size
                  }}
                  src={image2}
                  alt={'image2'}
                />
              ) : (
                ''
              )}
              {innerContent4 ? (
                <p
                  style={{
                    position: 'absolute',
                    top: isSmallScreen
                      ? innerContent4HeightSmall
                      : innerContent4Height,
                    left: '18px',
                    right: '18px',
                    fontWeight: '400',
                    fontSize: '12px',
                    lineHeight: '29.05px',
                    fontFamily: fontFamilies
                  }}
                >
                  {innerContent4}
                </p>
              ) : (
                ''
              )}
              {image3 ? (
                <img
                  style={{
                    position: 'absolute',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    top: isSmallScreen ? image3HeightSmall : image3Height,
                    width: image3Size
                  }}
                  src={image3}
                  alt={'image3'}
                />
              ) : (
                ''
              )}
              {image4 ? (
                <img
                  style={{
                    position: 'absolute',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    top: isSmallScreen ? image4HeightSmall : image4Height,
                    width: image4Size
                  }}
                  src={image4}
                  alt={'image4'}
                />
              ) : (
                ''
              )}
            </div>
            <a href={`https://github.com/brodmannerik/${project}`}>
              <img
                src={GithubIcon}
                style={{
                  top: isSmallScreen ? githubIconHeightSmall : githubIconHeight,
                  position: 'absolute',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '7%'
                }}
                alt="GithubIcon"
              />
            </a>
          </div>
        </div>
      )}
    </div>
  )
}

export default Card
