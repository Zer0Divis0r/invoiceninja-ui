/**
 * Invoice Ninja (https://invoiceninja.com).
 *
 * @link https://github.com/invoiceninja/invoiceninja source repository
 *
 * @copyright Copyright (c) 2022. Invoice Ninja LLC (https://invoiceninja.com)
 *
 * @license https://www.elastic.co/licensing/elastic-license
 */

import { Invoice } from '$app/common/interfaces/invoice';
import { CommonActionsPreferenceModal } from '$app/components/CommonActionsPreferenceModal';
import { Icon } from '$app/components/icons/Icon';
import { Fragment, useState } from 'react';
import { MdSettings } from 'react-icons/md';

import { useActions } from './Actions';
import {
  useAllCommonActions,
  useDefaultCommonActions,
} from '$app/common/hooks/useCommonActions';

interface Props {
  invoice: Invoice;
}
export function CommonActions(props: Props) {
  const allCommonActions = useAllCommonActions();
  const defaultCommonActions = useDefaultCommonActions();

  const [isPreferenceModalOpen, setIsPreferenceModalOpen] =
    useState<boolean>(false);

  const actions = useActions({ dropdown: false });

  const { invoice } = props;

  return (
    <>
      <div className="flex items-center space-x-3">
        {actions.map((action) => action(invoice))}

        <div>
          <Icon
            className="cursor-pointer"
            element={MdSettings}
            size={25}
            onClick={() => setIsPreferenceModalOpen(true)}
          />
        </div>
      </div>

      <CommonActionsPreferenceModal
        entity="invoice"
        allCommonActions={allCommonActions}
        defaultCommonActions={defaultCommonActions}
        visible={isPreferenceModalOpen}
        setVisible={setIsPreferenceModalOpen}
      />
    </>
  );
}
