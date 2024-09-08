type Props = Omit<ComponentProps<typeof Link>, 'href'> & { href: string };

import { Link } from 'expo-router';
import { openBrowserAsync } from 'expo-web-browser';
import { type ComponentProps } from 'react';
import { Platform, GestureResponderEvent } from 'react-native';

export function ExternalLink({ href :string, ...rest }: Props): JSX.Element {
  const isWeb = Platform.OS === 'web';

  return (
    <Link
      target="_blank"
      {...rest}
      href={href}
      onPressIn={async (event: GestureResponderEvent) => {
        if (!isWeb) {
          // Prevent the default behavior of linking to the default browser on native.
          event.preventDefault();
          // Open the link in an in-app browser.
          await openBrowserAsync(href);
        }
      }}
    />
  );
}