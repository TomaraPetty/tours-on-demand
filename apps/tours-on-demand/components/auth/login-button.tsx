import { useAuth0 } from '@auth0/auth0-react'
import { Button } from '@/components/ui/button'

export function LoginButton() {
  const { loginWithRedirect, isAuthenticated, logout, user } = useAuth0()

  if (isAuthenticated) {
    return (
      <div className="flex items-center gap-4">
        <span className="text-sm text-slate-600">Welcome, {user?.name}</span>
        <Button
          variant="outline"
          onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}
        >
          Log Out
        </Button>
      </div>
    )
  }

  return (
    <Button onClick={() => loginWithRedirect()}>
      Log In
    </Button>
  )
} 