import ProductCard from '../../components/Main/ProductCard/ProductCard';
import {
  TopSection,
  HeroContainer,
  HeroOuterContainer,
  HeroContent,
  ProductCardsContainer,
  MidSection,
  LowerMidSection,
  ecommerce,
  website,
  maintenance,
  ImageContainer,
  consulting,
} from './Homepage.style';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

import HomeRepairServiceIcon from '@mui/icons-material/HomeRepairService';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import FactCheckIcon from '@mui/icons-material/FactCheck';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import WebIcon from '@mui/icons-material/Web';
import Groups3Icon from '@mui/icons-material/Groups3';

function Homepage() {
  return (
    <>
      <TopSection>
        <HeroOuterContainer>
          <ImageContainer>
            <img src="/pictures/lights.jpg" alt="lights" />
          </ImageContainer>
          <HeroContainer>
            <HeroContent>
              <h2>Let's build your DREAM!</h2>
              <p>Are you looking to improve your online presence, but not sure where to start?</p>
              <p>Elevate your business and stand out online with our top-quality website development, design, and marketing services.</p>
            </HeroContent>
            <Button component={Link} to="/contactform" variant="outlined" id="herobutton">
              Start Today
            </Button>
          </HeroContainer>
        </HeroOuterContainer>
      </TopSection>
      <MidSection>
        <h2 id="heading">Products & Services</h2>

        <ProductCardsContainer>
          <ProductCard icon={<WebIcon color="primary" />} heading="Website development" content={website} width="25%"></ProductCard>
          <ProductCard icon={<FactCheckIcon color="primary" />} heading="Maintenance" content={maintenance} width="25%"></ProductCard>
          <ProductCard icon={<ShoppingCartIcon color="primary" />} heading="E-commerce" content={ecommerce} width="25%"></ProductCard>
        </ProductCardsContainer>
      </MidSection>

      <LowerMidSection>
        <h2 id="heading">Consulting</h2>
        <ProductCardsContainer>
          <ProductCard
            id="consulting"
            icon={<Groups3Icon color="primary" />}
            heading="Because we know better"
            content={consulting}
            width="50%"
          ></ProductCard>
        </ProductCardsContainer>
      </LowerMidSection>

      <LowerMidSection>
        <h2 id="heading">How it works</h2>
        <ProductCardsContainer>
          <ProductCard icon={<HomeRepairServiceIcon color="primary" />} heading="More Content" content="content"></ProductCard>
          <ProductCard icon={<ManageAccountsIcon color="primary" />} heading="More Content" content="content"></ProductCard>
          <ProductCard icon={<FactCheckIcon color="primary" />} heading="More Content" content="content"></ProductCard>
        </ProductCardsContainer>
      </LowerMidSection>

      <LowerMidSection>
        <h2 id="heading">Footer</h2>
      </LowerMidSection>
    </>
  );
}
export default Homepage;