/**
 * Licensed to JumpMind Inc under one or more contributor
 * license agreements.  See the NOTICE file distributed
 * with this work for additional information regarding
 * copyright ownership.  JumpMind Inc licenses this file
 * to you under the GNU General Public License, version 3.0 (GPLv3)
 * (the "License"); you may not use this file except in compliance
 * with the License.
 *
 * You should have received a copy of the GNU General Public License,
 * version 3.0 (GPLv3) along with this library; if not, see
 * <http://www.gnu.org/licenses/>.
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
#include "service/OutgoingBatchService.h"
#include "common/Log.h"

SymOutgoingBatch* SymOutgoingBatchService_findOutgoingBatch(SymOutgoingBatchService *this, long batchId, char *nodeId) {
    SymLog_info("SymOutgoingBatchService_find_outgoing_batch");
    return NULL;
}

SymOutgoingBatch* SymOutgoingBatchService_getOutgoingBatches(SymOutgoingBatchService *this, char *nodeId) {
    SymLog_info("SymOutgoingBatchService_get_outgoing_batches");
    return NULL;
}

void SymOutgoingBatchService_updateOutgoingBatch(SymOutgoingBatchService *this, SymOutgoingBatch *outgoingBatch) {
    SymLog_info("SymOutgoingBatchService_update_outgoing_batch");
}
