import AuthSignIn from '../pages/auth/Auth-Sign-In'
import AuthSignUp from '../pages/auth/Auth-Sign-Up'
import AuthChangePassword from '../pages/auth/Auth-Change-Password'
import AuthResetPassword from '../pages/auth/Auth-Reset-Password'
import AuthForgetPassword from '../pages/auth/Auth-Forget-Password'
import Home from '../pages/Home'
import ProductMain from '../pages/products/Product-Main'
import ViewProduct from '../pages/products/View-Products'
import ProductDetail from '../pages/products/Product-Detail'
import ProductAdvanceFilter from '../pages/products/Product-Advance-Search'
import ProductTechnicalFeature from '../components/products/Tabs-Technical-Feature'
import ProductWriteComment from '../components/products/Tabs-Comment-Write'
import ProfileMain from '../pages/profile/Profile-Main'
import Profile from '../pages/profile/Profile'
import ProfilePersonalInfo from '../pages/profile/Profile-Personal-Info'
import ProfileOrdersMain from '../pages/profile/Profile-Orders-Main'
import ProfileOrders from '../pages/profile/Profile-Orders'
import ProfileOrderDetails from '../pages/profile/Profile-Order-Details'
import ProfileAddresses from '../pages/profile/Profile-Addresses'
import ProfileInvoices from "../pages/profile/Profile-Invoices"
import ProfileInvoiceDetails from "../pages/profile/Profile-Invoice-Details"
import ProfileProducts from "../pages/profile/Profile-Products"
import ProfileComments from "../pages/profile/Profile-Comments"
import CheckOutMain from '../pages/check-out/Check-Out-Main'
import CheckOutCart from '../pages/check-out/Check-Out-Cart'
import CheckOutShowInvoice from '../pages/check-out/Check-Out-Show-Invoices'
import CheckOutSending from '../pages/check-out/Check-out-Sending'
import CheckOutConfirmation from '../pages/check-out/Check-Out-Confirmation'
import MainPage from "../pages/Main-Page"

export default [{
    path: '/',
    component: MainPage,
    children: [{
        path: '',
        component: Home
      },
      {
        path: '/profile',
        component: ProfileMain,
        children: [{
            path: '',
            component: Profile
          },
          {
            path: 'personal_info',
            component: ProfilePersonalInfo
          },
          {
            path: 'orders',
            component: ProfileOrdersMain,
            children: [{
                path: '',
                component: ProfileOrders
              },
              {
                path: ':id',
                component: ProfileOrderDetails
              }
            ]
          },
          {
            path: 'invoices',
            component: ProfileOrdersMain,
            children: [{
                path: '',
                component: ProfileInvoices
              },
              {
                path: ':id',
                component: ProfileInvoiceDetails
              }
            ]
          },
          {
            path: 'addresses',
            component: ProfileAddresses
          },
          {
            path: 'products',
            component: ProfileProducts
          },
          {
            path: 'comments',
            component: ProfileComments
          }
        ]
      },
      {
        path: '/check_out',
        component: CheckOutMain,
        children: [{
            path: '',
            component: CheckOutCart
          },
          {
            path: 'pre_invoices',
            component: CheckOutShowInvoice
          },
          {
            path: 'sending',
            component: CheckOutSending
          },
          {
            path: 'confirmation',
            component: CheckOutConfirmation
          }
        ]
      },
      {
        path: '/view_products',
        component: ProductMain,
        children: [{
            path: '',
            component: ViewProduct
          },
          {
            path: 'product_detail/:id',
            component: ProductDetail
          },
          {
            path: 'advance_search',
            component: ProductAdvanceFilter
          },
          {
            path: 'technical_feature',
            component: ProductTechnicalFeature
          },
          {
            path: 'Write_comment',
            component: ProductWriteComment
          }
        ]
      },
    ]
  },
  {
    path: '/sign_in',
    component: AuthSignIn
  },
  {
    path: '/sign_up',
    component: AuthSignUp
  },
  {
    path: '/change_password',
    component: AuthChangePassword
  },
  {
    path: '/reset_password/:token',
    component: AuthResetPassword
  },
  {
    path: '/forget_password',
    component: AuthForgetPassword
  },
  {
    path: '*',
    redirect: '/'
  }
]
